// ================================================================>> Core Library
import { Module }           from '@nestjs/common';

// ================================================================>> Costom Library
import { SalesService }      from './sales.service';
import { SalesController }   from './sales.controller';

@Module({
    controllers: [SalesController],
    providers: [SalesService]
})

export class SalesModule { }
