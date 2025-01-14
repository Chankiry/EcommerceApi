// =========================================================================>> Core Library
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';

// =========================================================================>> Third Party Library

// =========================================================================>> Custom Library
import { ExceptionErrorsFilter } from './app/exceptions/errors.filter';
import { ConfigModule } from './config/config.module';

// Middleware
import { JwtMiddleware } from './app/middlewares/jwt.middleware';

// Bass Controller
import { AppController } from './app.controller';
import { appRoutes } from './app.routing';
import { TimeoutInterceptor } from './app/interceptors/timeout.interceptor';

// Resources
import { AuthModule } from './app/resources/account/auth/auth.module';
import { ProfileModule } from './app/resources/account/profile/profile.module';
import { PublicModule } from './app/resources/public/public.module';
import { UserModule } from './app/resources/user/user.module';
import { AdminModule } from './app/resources/admin/admin.module';


// ======================================= >> Code Starts Here << ========================== //
@Module({
    controllers: [
        AppController
    ],
    imports: [
        // Apply global config module for use every where we need
        ConfigModule,
        // Load modules of POS resources
        AuthModule,
        ProfileModule,
        PublicModule,
        UserModule,
        AdminModule,
        // Utilize RouterModule for configuring application routes
        RouterModule.register(appRoutes)
    ],
    providers: [
        // all this we it the same use as Global in main.ts
        /**
         * @noted If we use as Global in main.ts => app.useGlobalFilters(new ExceptionErrorsFilter());
         */
        {
            provide: APP_FILTER,
            useClass: ExceptionErrorsFilter,
        },
        /**
         * @noted If we use as Global in main.ts => app.useGlobalInterceptors(new TimeoutInterceptor());
         */
        {
            provide: APP_INTERCEPTOR,
            useClass: TimeoutInterceptor
        },
        /**
         * @noted If we use as Global in main.ts => 
         * app.useGlobalInterceptors(new TransformInterceptor());
         */
        // {
        //     provide: APP_INTERCEPTOR,
        //     useFactory: () => new TransformInterceptor(), //=> We can useClass like TimeoutInterceptor
        //     inject: []
        // }
    ]
})
/**
 * @author Kiry <yimklok.kh@gmail.com>
 */
export class AppModule implements NestModule {
    // Apply global jwt middleware exclude only baseRoute, login and register
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(JwtMiddleware)
            .exclude(
                {
                    path: '', method: RequestMethod.GET
                },
                {
                    path: 'api/public', method: RequestMethod.GET
                },
                {
                    path: 'api/public/view-product/:id', method: RequestMethod.GET
                },
                {
                    path: 'api/auth/login', method: RequestMethod.POST
                },
                {
                    path: 'api/auth/sign-up', method: RequestMethod.POST
                },
                {
                    path: 'api/auth/register', method: RequestMethod.POST
                })
            .forRoutes({ path: '*', method: RequestMethod.ALL });
        // We can add more consumer if use have other middleware. 
        // Ex: Apply AdminMiddleware specifically to UserController and ProductController
        // consumer
        //     .apply(AdminMiddleware)
        //     .forRoutes(UserController, ProductController);
        // =====> But we should AdminMiddleware inside UserModule and ProductModule itself.
    }
}
// For dashboard, invoice, pos, profile and sale I will apply Guards concept in NestJS