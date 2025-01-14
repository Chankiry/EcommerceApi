// ================================================================>> Core Library
import { Body, Post, Controller, HttpCode, HttpStatus, Get, Query, Param, Delete } from '@nestjs/common';

// ================================================================>> Costom Library
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Controller()
export class ProductController {

    constructor(private readonly _service: ProductService) { }

    @Post()
    async create(
        @Body() body: CreateProductDto,
    ): Promise<any> {
        return this._service.create(body);
    }

    @Post(':id')
    async update(
        @Param('id') id: number,
        @Body() body: UpdateProductDto,
    ): Promise<any> {
        return this._service.update(id,body);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number,
    ): Promise<any> {
        return this._service.delete(id);
    }

}
