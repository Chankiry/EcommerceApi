import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateAddToCartDto {

    @IsNumber()
    @IsNotEmpty(({ message: 'Please select color!' }))
    color_id: number;

    @IsNumber()
    @IsNotEmpty(({ message: 'Please select size!' }))
    size_id: number;

    @IsNumber()
    @IsNotEmpty(({ message: 'Please select quantity!' }))
    qty: number = 1;

}
