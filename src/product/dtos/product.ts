import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @Min(0)
    price: number

    @IsNumber()
    @Min(0)
    quantity: number
}