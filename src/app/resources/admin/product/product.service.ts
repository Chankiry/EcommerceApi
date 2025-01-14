// ================================================================>> Core Library
import { BadRequestException, Injectable } from '@nestjs/common';

// ================================================================>> Third Party Library
import { Sequelize, Transaction } from 'sequelize';

// ================================================================>> Costom Library
// Model

import sequelizeConfig from 'src/config/sequelize.config';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { FileService } from 'src/app/services/file.service';
import ProductType from 'src/models/product/products_type.model';
import Product from 'src/models/product/product.model';

@Injectable()
export class ProductService {

    constructor(private readonly fileService: FileService) { };

    async create( body: CreateProductDto): Promise<any> {
        const sequelize = new Sequelize(sequelizeConfig);
        let transaction: Transaction;
        try {
            // Start the transaction
            transaction = await sequelize.transaction();

            const checkType = await ProductType.findByPk(body.type_id);

            if(!checkType){
                await transaction.rollback();
                throw new BadRequestException("Category doesn't exist!");
            }
            
            const result = await this.fileService.uploadBase64Image('products', body.image);
            if (result.error) {
                await transaction.rollback();
                throw new BadRequestException(result.error);
            }
            body.image = result.file.uri;

            if( body.image2 != '' && body.image2!){
                const result = await this.fileService.uploadBase64Image('products', body.image2);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                body.image2 = result.file.uri;
            }

            if( body.image3 != '' && body.image3!){
                const result = await this.fileService.uploadBase64Image('products', body.image3);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                body.image3 = result.file.uri;
            }

            if( body.image4 != '' && body.image4!){
                const result = await this.fileService.uploadBase64Image('products', body.image4);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                body.image4 = result.file.uri;
            }

            const newProduct = await Product.create(
                body,
                {
                    returning: true,
                    transaction
                }
            )
            
            if (!newProduct){
                await transaction.rollback();
                throw new BadRequestException('Create Product unsuccessfull!');
            }

            await transaction.commit();

            return {
                data: newProduct,
                message: "Create Product successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async update(id: number, body: UpdateProductDto): Promise<any> {
        const sequelize = new Sequelize(sequelizeConfig);
        let transaction: Transaction;
        try {
            // Start the transaction
            transaction = await sequelize.transaction();

            const checkProduct = await Product.findByPk(id);

            if(!checkProduct){
                await transaction.rollback();
                throw new BadRequestException("Category doesn't exist!");
            }

            const checkType = await ProductType.findByPk(body.type_id);

            if(!checkType){
                await transaction.rollback();
                throw new BadRequestException("Category doesn't exist!");
            }

            const product = new Product();
            product.type_id     = body.type_id;
            product.name        = body.name;
            product.image       = checkProduct.image;
            product.image2      = checkProduct.image2;
            product.image3      = checkProduct.image3;
            product.image4      = checkProduct.image4;
            product.price       = body.price;
            product.discount    = body.discount;
            product.description = body.description;
            
            if( body.image2 != '' && body.image2!){
                const result = await this.fileService.uploadBase64Image('products', body.image);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                product.image = result.file.uri;
            }

            if( body.image2 != '' && body.image2!){
                const result = await this.fileService.uploadBase64Image('products', body.image2);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                product.image2 = result.file.uri;
            }

            if( body.image3 != '' && body.image3!){
                const result = await this.fileService.uploadBase64Image('products', body.image3);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                product.image3 = result.file.uri;
            }

            if( body.image4 != '' && body.image4!){
                const result = await this.fileService.uploadBase64Image('products', body.image4);
                if (result.error) {
                    await transaction.rollback();
                    throw new BadRequestException(result.error);
                }
                product.image4 = result.file.uri;
            }

            const newProduct = await Product.update(
                product,
                {
                    where: {id},
                    returning: true,
                    transaction
                }
            )
            
            if (!newProduct){
                await transaction.rollback();
                throw new BadRequestException('Update Product unsuccessfull!');
            }

            await transaction.commit();

            return {
                data: newProduct,
                message: "Update Product successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async delete( id: number): Promise<any> {
        const sequelize = new Sequelize(sequelizeConfig);
        let transaction: Transaction;
        try {
            // Start the transaction
            transaction = await sequelize.transaction();

            const product = await Product.findByPk(id);
            
            if(!product){
                await transaction.rollback();
                throw new BadRequestException("This product doesn't exist!");
            }

            const newShipping = await Product.destroy(
                {
                    where: {id},
                    transaction,
                }
            )

            if (!newShipping){
                await transaction.rollback();
                throw new BadRequestException('Delete product unsuccessfull!');
            }

            await transaction.commit();

            return {
                message: "Delete product successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }


}
