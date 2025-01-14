// ================================================================>> Core Library
import { Body, Post, Controller, HttpCode, HttpStatus, Get, Query, Param, Delete } from '@nestjs/common';

// ================================================================>> Costom Library
import { SalesService } from './sales.service';
import { ProductTypeEnum } from 'src/app/enums/product/type.enum';
import UserDecorator from 'src/app/decorators/user.decorator';
import User from 'src/models/user/user.model';

@Controller()
export class SalesController {

    constructor(private readonly _service: SalesService) { }

    @Get()
    async listing(
    ): Promise<any> {
        return await this._service.listing();
    }
}
