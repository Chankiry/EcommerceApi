// ================================================================>> Core Library
import { BadRequestException, Injectable } from '@nestjs/common';

// ================================================================>> Third Party Library
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { DatabaseError, Op, Sequelize, Transaction } from 'sequelize';

// ================================================================>> Costom Library
// Model

import { jwtConstants } from 'src/app/shared/constants.jwt';
import Product from 'src/models/product/product.model';
import { Pagination } from 'src/app/shared/pagination.interface';
import User from 'src/models/user/user.model';
import ShippingAddress from 'src/models/user/shipping-address.model';
import sequelizeConfig from 'src/config/sequelize.config';
import { CreateShippingtDto } from './shipping.dto';

@Injectable()
export class ShippingService {

    async listing( user_id: number ): Promise<any>{
        try {
            
            const user = await User.findByPk(user_id);
            
            if(!user){
                throw new BadRequestException("User doesn't exist!");
            }

            const shippings = await ShippingAddress.findAll({
                where: {user_id}
            });

            return shippings;

        }
        catch(err){
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }

    async create( user_id: number, body: CreateShippingtDto): Promise<any> {
        const sequelize = new Sequelize(sequelizeConfig);
        let transaction: Transaction;
        try {
            // Start the transaction
            transaction = await sequelize.transaction();

            const user = await User.findByPk(user_id);
            
            if(!user){
                await transaction.rollback();
                throw new BadRequestException("User doesn't exist!");
            }

            const newShipping = await ShippingAddress.create(
                {
                    full_name: body.full_name,
                    address: body.address,
                    city: body.city,
                    postal_code: body.postal_code,
                    phone: body.phone,
                    user_id
                },
                {
                    returning: true,
                    transaction,
                }
            )

            if (!newShipping){
                await transaction.rollback();
                throw new BadRequestException('Create Shipping Address unsuccessfull!');
            }

            await transaction.commit();

            return {
                data: newShipping,
                message: "Create Shipping Address successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async update( id: number, user_id: number, body: CreateShippingtDto): Promise<any> {
        const sequelize = new Sequelize(sequelizeConfig);
        let transaction: Transaction;
        try {
            // Start the transaction
            transaction = await sequelize.transaction();

            const user = await User.findByPk(user_id);
            
            if(!user){
                await transaction.rollback();
                throw new BadRequestException("User doesn't exist!");
            }

            const checkShipping = await ShippingAddress.findByPk(id);
            
            if(!checkShipping){
                await transaction.rollback();
                throw new BadRequestException("This Shipping Address doesn't exist!");
            }

            const newShipping = await ShippingAddress.update(
                {
                    full_name: body.full_name,
                    address: body.address,
                    city: body.city,
                    postal_code: body.postal_code,
                    phone: body.phone,
                    user_id
                },
                {
                    where: {id, user_id},
                    returning: true,
                    transaction,
                }
            )

            if (!newShipping){
                await transaction.rollback();
                throw new BadRequestException('Update Shipping Address unsuccessfull!');
            }

            await transaction.commit();

            return {
                data: newShipping,
                message: "Update Shipping Address successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async delete( id: number, user_id: number): Promise<any> {
        const sequelize = new Sequelize(sequelizeConfig);
        let transaction: Transaction;
        try {
            // Start the transaction
            transaction = await sequelize.transaction();

            const user = await User.findByPk(user_id);
            
            if(!user){
                await transaction.rollback();
                throw new BadRequestException("User doesn't exist!");
            }

            const checkShipping = await ShippingAddress.findByPk(id);
            
            if(!checkShipping){
                await transaction.rollback();
                throw new BadRequestException("This Shipping Address doesn't exist!");
            }

            const newShipping = await ShippingAddress.destroy(
                {
                    where: {id, user_id},
                    transaction,
                }
            )

            if (!newShipping){
                await transaction.rollback();
                throw new BadRequestException('Delete Shipping Address unsuccessfull!');
            }

            await transaction.commit();

            return {
                message: "Delete Shipping Address successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

}
