import { IsNotEmpty, IsString } from "class-validator"

export class CreatePaymentMethodtDto {

    @IsString()
    @IsNotEmpty(({ message: 'Please Input PaymentMethod Name!' }))
    name_card: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input PaymentMethod Number!' }))
    card_number: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input Expired Date!' }))
    expired_date: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input CVV!' }))
    cvv: string

}
