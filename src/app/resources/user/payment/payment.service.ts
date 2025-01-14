// ================================================================>> Core Library
import { BadRequestException, Injectable } from '@nestjs/common';

// ================================================================>> Third Party Library
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { DatabaseError, Op, Sequelize, Transaction } from 'sequelize';

// ================================================================>> Costom Library
// Model

import User from 'src/models/user/user.model';
import sequelizeConfig from 'src/config/sequelize.config';
import { CreatePaymentMethodtDto } from './payment.dto';
import PaymentMethod from 'src/models/user/payment_method.model';

@Injectable()
export class PaymentMethodService {

    async listing( user_id: number ): Promise<any>{
        try {
            
            const user = await User.findByPk(user_id);
            
            if(!user){
                throw new BadRequestException("User doesn't exist!");
            }

            const paymentMethods = await PaymentMethod.findAll({
                where: {user_id}
            });

            return paymentMethods;

        }
        catch(err){
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }

    async create( user_id: number, body: CreatePaymentMethodtDto): Promise<any> {
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

            const newPaymentMethod = await PaymentMethod.create(
                {
                    name_card: body.name_card,
                    card_number: body.card_number,
                    expired_date: body.expired_date,
                    cvv: body.cvv,
                    user_id
                },
                {
                    returning: true,
                    transaction,
                }
            )

            if (!newPaymentMethod){
                await transaction.rollback();
                throw new BadRequestException('Create PaymentMethod unsuccessfull!');
            }

            await transaction.commit();

            return {
                data: newPaymentMethod,
                message: "Create PaymentMethod successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async update( id: number, user_id: number, body: CreatePaymentMethodtDto): Promise<any> {
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

            const checkPaymentMethod = await PaymentMethod.findByPk(id);
            
            if(!checkPaymentMethod){
                await transaction.rollback();
                throw new BadRequestException("This PaymentMethod Address doesn't exist!");
            }

            const newPaymentMethod = await PaymentMethod.update(
                {
                    name_card: body.name_card,
                    card_number: body.card_number,
                    expired_date: body.expired_date,
                    cvv: body.cvv,
                    user_id
                },
                {
                    where: {id,user_id},
                    returning: true,
                    transaction,
                }
            )

            if (!newPaymentMethod){
                await transaction.rollback();
                throw new BadRequestException('Update PaymentMethod unsuccessfull!');
            }

            await transaction.commit();

            const paymentMethod = await PaymentMethod.findByPk(id);

            return {
                data: paymentMethod,
                message: "Update PaymentMethod successfull!"
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

            const checkPaymentMethod = await PaymentMethod.findByPk(id);
            
            if(!checkPaymentMethod){
                await transaction.rollback();
                throw new BadRequestException("This PaymentMethod doesn't exist!");
            }

            const newPaymentMethod = await PaymentMethod.destroy(
                {
                    where: {id, user_id},
                    transaction,
                }
            )

            if (!newPaymentMethod){
                await transaction.rollback();
                throw new BadRequestException('Delete PaymentMethod unsuccessfull!');
            }

            await transaction.commit();

            return {
                message: "Delete PaymentMethod successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

}
