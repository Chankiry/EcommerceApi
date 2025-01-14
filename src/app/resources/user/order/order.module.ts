// ================================================================>> Core Library
import { Module }           from '@nestjs/common';

// ================================================================>> Costom Library
import { OrderService }      from './order.service';
import { OrderController }   from './order.controller';

@Module({
    controllers: [OrderController],
    providers: [OrderService]
})

export class OrderModule { }
