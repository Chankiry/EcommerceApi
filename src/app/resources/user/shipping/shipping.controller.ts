// ================================================================>> Core Library
import { Body, Post, Controller, HttpCode, HttpStatus, Get, Query, Param, Delete } from '@nestjs/common';

// ================================================================>> Costom Library
import { ShippingService } from './shipping.service';
import { ProductTypeEnum } from 'src/app/enums/product/type.enum';
import UserDecorator from 'src/app/decorators/user.decorator';
import User from 'src/models/user/user.model';
import { CreateShippingtDto } from './shipping.dto';

@Controller()
export class ShippingController {

    constructor(private readonly _service: ShippingService) { }

    @Get()
    async listing(
        @UserDecorator() user: User
    ): Promise<any> {
        return await this._service.listing(user.id);
    }

    @Post()
    async create(
        @Body() body: CreateShippingtDto,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.create(user.id, body);
    }

    @Post(':id')
    async update(
        @Param('id') id: number,
        @Body() body: CreateShippingtDto,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.update(id,user.id, body);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number,
        @UserDecorator() user?: User
    ) : Promise<any>
    {
        return await this._service.delete(id, user.id);
    }

}
