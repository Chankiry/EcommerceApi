// ================================================================>> Core Library
import { Routes } from '@nestjs/core';

// ================================================================>> Custom Library
// Account
import { AuthModule } from './app/resources/account/auth/auth.module';
import { ProfileModule } from './app/resources/account/profile/profile.module';
import { PublicModule } from './app/resources/public/public.module';
import { UserModule } from './app/resources/user/user.module';
import { PaymentMethodModule } from './app/resources/user/payment/payment.module';
import { OrderModule } from './app/resources/user/order/order.module';
import { ShippingModule } from './app/resources/user/shipping/shipping.module';
import { AdminModule } from './app/resources/admin/admin.module';
import { ProductModule } from './app/resources/admin/product/product.module';
import { SalesModule } from './app/resources/admin/sales/sales.module';

export const appRoutes: Routes = [{
    path: 'api',
    children: [
        {
            path: 'auth',
            module: AuthModule
        },
        {
            path: 'profile',
            module: ProfileModule
        },
        {
            path: 'public',
            module: PublicModule
        },
        {
            path: 'admin',
            module: AdminModule,
            children: [
                {
                    path: 'product',
                    module: ProductModule
                },
                {
                    path: 'sales',
                    module: SalesModule
                }
            ]
        },
        {
            path: 'user',
            module: UserModule,
            children: [
                {
                    path: 'payment-methods',
                    module: PaymentMethodModule
                },
                {
                    path: 'orders',
                    module: OrderModule
                },
                {
                    path: 'shippings',
                    module: ShippingModule
                }
            ]
        },
    ]
}];