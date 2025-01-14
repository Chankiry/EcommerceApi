// =========================================================================>> Core Library
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AdminMiddleware } from 'src/app/middlewares/admin.middleware';
import { ProductModule } from './product/product.module';
import { SalesModule } from './sales/sales.module';

@Module({
    imports: [
        ProductModule,
        SalesModule
    ]
})

export class AdminModule implements NestModule  { 
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AdminMiddleware)
            .forRoutes({ path: 'api/admin/*', method: RequestMethod.ALL });
    }
}