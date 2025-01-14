// ================================================================>> Core Library
import { Body, Post, Controller, HttpCode, HttpStatus, Get, Query, Param } from '@nestjs/common';

// ================================================================>> Costom Library
import { PublicService } from './public.service';
import { ProductTypeEnum } from 'src/app/enums/product/type.enum';

@Controller()
export class PublicController {

    constructor(private readonly _service: PublicService) { }

    @Get()
    async listing(
        @Query('type_id') type_id: ProductTypeEnum,
    ): Promise<any> {
        return await this._service.listing(type_id);
    }

    @Get('view-product/:id')
    async view(
        @Param('id') id: number,
    ): Promise<any> {
        return await this._service.view(id);
    }
}
