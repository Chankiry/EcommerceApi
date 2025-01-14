// ================================================================>> Core Library
import { BadRequestException, Injectable } from '@nestjs/common';

// ================================================================>> Third Party Library
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { DatabaseError, Op } from 'sequelize';

// ================================================================>> Costom Library
// Model

import { jwtConstants } from 'src/app/shared/constants.jwt';
import { UsersActiveEnum } from 'src/app/enums/user/active.enum';
import Product from 'src/models/product/product.model';
import { Pagination } from 'src/app/shared/pagination.interface';
import ProductReview from 'src/models/product/product_reviews.model';
import ProductSize from 'src/models/product/product_sizes.model';
import ProductColor from 'src/models/product/product_colors.model';

@Injectable()
export class PublicService {

    async listing( type_id: number): Promise<any>{
        try {

            const { rows: products, count } = await Product.findAndCountAll({
                where: {type_id},
                attributes: [
                    'id', 'image', 'name', 'price', 'discount', 'description'
                    
                ],
                distinct: true, 
                include: [
                    
                ],
                order: [
                    ['id', 'DESC']
                ]
            });
            

            const response = {
                products
            };
            return response;

        }
        catch(err){
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }

    async view( id: number): Promise<any>{
        try {

            const product = await Product.findOne({
                where: {id},
                include: [
                    {
                        model: ProductReview
                    }
                ]
            })

            const sizes = await ProductSize.findAll({
                where: {type_id: product.type_id},
                attributes: ['id', 'name']
            });


            const colors = await ProductColor.findAll({
                where: {type_id: product.type_id},
                attributes: ['id', 'name', 'color']
            });



            return {
                product,
                sizes,
                colors
            };

        }
        catch(err){
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }
    
}
