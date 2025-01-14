// =========================================================================>> Core Library
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtMiddleware } from 'src/app/middlewares/jwt.middleware';
import { PaymentMethodModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { ShippingModule } from './shipping/shipping.module';

// =========================================================================>> Custom Library

// ======================================= >> Code Starts Here << ========================== //
@Module({
    imports: [
        PaymentMethodModule,
        OrderModule,
        ShippingModule
    ]
})

export class UserModule { }