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

    @Get('products-cart')
    async listingProductCart(
        @UserDecorator() user: User
    ): Promise<any> {
        return await this._service.listingProductCart(user.id);
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

    @Post('add-qyt-in-cart/:id')
    async addQty(
        @Param('id') id: number,
        @Body('qty') qty: number,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.addQty(id,user.id, qty);
    }

    @Delete('remove-form-cart/:id')
    async removeFromCart(
        @Param('id') id: number,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        console.log(id)
        return await this._service.removeFromCart(id, user.id);
    }

    @Post('checkout')
    async update(
        @Body() body: {shipping_id: number, payment_id: number },
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.checkout(user.id, body.shipping_id, body.payment_id);
    }

}
