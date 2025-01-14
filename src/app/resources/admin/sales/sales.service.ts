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
import Sales from 'src/models/user/payment_method.model';
import Checkout from 'src/models/order/checkout.model';
import OrderDetail from 'src/models/order/order_detail.model';

@Injectable()
export class SalesService {

    async listing(): Promise<any>{
        try {
            
            const sales = await Checkout.findAll({
                include: [
                    {
                        model: OrderDetail
                    }
                ]
            })

            return sales;

        }
        catch(err){
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }

    
}
