// ================================================================>> Core Library
import { Module }           from '@nestjs/common';

// ================================================================>> Costom Library
import { PaymentMethodService }      from './payment.service';
import { PaymentMethodController }   from './payment.controller';

@Module({
    controllers: [PaymentMethodController],
    providers: [PaymentMethodService]
})

export class PaymentMethodModule { }
