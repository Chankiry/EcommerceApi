// ================================================================>> Core Library
import { Body, Post, Controller, HttpCode, HttpStatus, Get, Query, Param, Delete } from '@nestjs/common';

// ================================================================>> Costom Library
import { OrderService } from './order.service';
import { ProductTypeEnum } from 'src/app/enums/product/type.enum';
import UserDecorator from 'src/app/decorators/user.decorator';
import User from 'src/models/user/user.model';
import { CreateAddToCartDto } from './order.dto';

@Controller()
export class OrderController {

    constructor(private readonly _service: OrderService) { }

    @Get('order-history')
    async listing(
        @UserDecorator() user: User
    ): Promise<any> {
        return await this._service.listing(user.id);
    }

    @Post('add-to-cart/:id')
    async addToCard(
        @Param('id') product_id: number,
        @Body() body: CreateAddToCartDto,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.addToCard(product_id,user.id, body);
    }

    @Delete('remove-form-cart/:id')
    async removeFromCart(
        @Param('id') id: number,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.removeFromCart(id, user.id);
    }

    @Post('checkout')
    async update(
        @Query('shipping_id') shipping_id: number,
        @Query('payment_id') payment_id: number,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.checkout(user.id, shipping_id, payment_id);
    }

}
