import { IsNotEmpty, IsString } from "class-validator"

export class CreateShippingtDto {

    @IsString()
    @IsNotEmpty(({ message: 'Please Input Full Name!' }))
    full_name: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input Address!' }))
    address: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input City!' }))
    city: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input Postal Code!' }))
    postal_code: string

    @IsString()
    @IsNotEmpty(({ message: 'Please Input Phone Number!' }))
    phone: string

}
