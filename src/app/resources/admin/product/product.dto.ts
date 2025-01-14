import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class CreateProductDto {

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image: string;

    @IsOptional()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image2?: string;

    @IsOptional()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image3?: string;

    @IsOptional()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image4?: string;

    @IsNumber()
    @IsNotEmpty()
    price: number = 0;

    @IsNumber()
    @IsNotEmpty()
    discount: number = 0;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateProductDto {

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image?: string;

    @IsOptional()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image2?: string;

    @IsOptional()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image3?: string;

    @IsOptional()
    @IsString({ message: "រូបភាពរបស់អ្នកប្រើប្រាស់ត្រូវតែជា base64" })
    @Matches(/^data:image\/(png|jpeg|jpg|gif);base64,/, {
        message: "Image must be a valid Base64-encoded image (PNG, JPEG, JPG, or GIF)",
    })
    image4?: string;

    @IsNumber()
    @IsNotEmpty()
    price: number = 0;

    @IsNumber()
    @IsNotEmpty()
    discount: number = 0;

    @IsString()
    @IsNotEmpty()
    description: string;
}