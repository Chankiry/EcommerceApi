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
import ProductOrder from 'src/models/order/order_detail.model';
import { CreateAddToCartDto } from './order.dto';
import ProductColor from 'src/models/product/product_colors.model';
import ProductSize from 'src/models/product/product_sizes.model';
import Product from 'src/models/product/product.model';
import Cart from 'src/models/order/cart.model';
import ShippingAddress from 'src/models/user/shipping-address.model';
import PaymentMethod from 'src/models/user/payment_method.model';
import Checkout from 'src/models/order/checkout.model';
import OrderDetail from 'src/models/order/order_detail.model';

@Injectable()
export class OrderService {

    async listing( user_id: number ): Promise<any>{
        try {
            
            const user = await User.findByPk(user_id);
            
            if(!user){
                throw new BadRequestException("User doesn't exist!");
            }

            const orders = await OrderDetail.findAll({
                where: {user_id}
            });

            return orders;

        }
        catch(err){
            console.log(err.message);
            throw new BadRequestException(err.message);
        }
    }

    async addToCard( id: number, user_id: number, body: CreateAddToCartDto): Promise<any> {
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

            const product = await Product.findByPk(id);
            
            if(!product){
                await transaction.rollback();
                throw new BadRequestException("Product doesn't exist!");
            }

            const color = await ProductColor.findByPk(body.color_id);
            
            if(!color){
                await transaction.rollback();
                throw new BadRequestException("Color doesn't exist!");
            }

            const size = await ProductSize.findByPk(body.size_id);
            
            if(!size){
                await transaction.rollback();
                throw new BadRequestException("Size doesn't exist!");
            }

            const newCart = await Cart.create(
                {
                    size_id: body.size_id,
                    color_id: body.color_id,
                    product_id: id,
                    user_id,
                    qty: body.qty
                },
                {
                    returning: true,
                    transaction
                }
            )

            if(!newCart){
                await transaction.rollback();
                throw new BadRequestException("Add product to cart unsuccessfull!");
            }

            await transaction.commit();

            return newCart;
        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async removeFromCart( id: number, user_id: number): Promise<any> {
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

            const checkCart = await Cart.findByPk(id);
            
            if(!checkCart){
                await transaction.rollback();
                throw new BadRequestException("This product doesn't exist in cart!");
            }

            const newCart = await Cart.destroy(
                {
                    where: {id, user_id},
                    transaction,
                }
            )

            if (!newCart){
                await transaction.rollback();
                throw new BadRequestException('Remove product from cart unsuccessfull!');
            }

            await transaction.commit();

            return {
                message: "Remove product from cart successfull!"
            }

        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async checkout( user_id: number, shipping_id: number, payment_id: number): Promise<any> {
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
            
            const payment = await PaymentMethod.findOne({
                where: {user_id, id: payment_id}
            })
            
            if(!payment){
                await transaction.rollback();
                throw new BadRequestException("Payment Method doesn't exist!");
            }

            const shipping = await ShippingAddress.findOne({
                where: {user_id, id: shipping_id}
            })
            
            if(!shipping){
                await transaction.rollback();
                throw new BadRequestException("Shipping Address doesn't exist!");
            }

            const cartProducts = await Cart.findAll({
                where: {user_id},
                include: [
                    {
                        model: Product
                    },
                    {
                        model: ProductColor,
                    },
                    {
                        model: ProductSize
                    }
                ]
            });

            if(cartProducts.length == 0){
                await transaction.rollback();
                throw new BadRequestException("No products for checkout!");
            }

            let total_price = 0; // Initialize totalPrice as a number
            cartProducts.forEach(p => {
                total_price += (p.product.price * (1 - p.product.discount / 100)) * p.qty; // Correct calculation with discount
            });

            const newCheckout = await Checkout.create(
                {
                    user_id,
                    total_price,
                    ordered_at: new Date(),
                    shipping_full_name: shipping.full_name,
                    shipping_address: shipping.address,
                    shipping_city: shipping.city,
                    shipping_postal_code: shipping.postal_code,
                    shipping_phone: shipping.phone,
                },
                {
                    returning: true,
                    transaction
                }
            )

            if(!newCheckout){
                await transaction.rollback();
                throw new BadRequestException("Checkout not successfull!");
            }

            const orderDetails = cartProducts.map( p=>{
                return {
                    checkout_id: newCheckout.id,
                    user_id,
                    product_name: p.product.name,
                    product_image: p.product.image,
                    color_name: p.color.name,
                    color: p.color.color,
                    size: p.size.name,
                    qty: p.qty,
                    discount: p.product.discount,
                    price: (p.product.price * (1 - p.product.discount / 100)) * p.qty,
                }
            })

            const newOrderDetail = await OrderDetail.bulkCreate(
                orderDetails,
                {
                    returning: true,
                    transaction
                }
            )

            if(newOrderDetail.length != cartProducts.length){
                await transaction.rollback();
                throw new BadRequestException("Can't proceed checkout! Missing products on carts during checkout!");
            }

            const removeCartProducts = await Cart.destroy({
                where: {user_id}
            })

            if(removeCartProducts != cartProducts.length){
                await transaction.rollback();
                throw new BadRequestException("Can't proceed checkout! Missing products on carts during checkout!");
            }

            await transaction.commit();

            const checkout = await Checkout.findOne({
                where: {id: newCheckout.id},
                include: [
                    {
                        model: OrderDetail
                    }
                ]
            })

            return {
                data: checkout,
                message: "Checkout successfull!"
            }
        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

}
