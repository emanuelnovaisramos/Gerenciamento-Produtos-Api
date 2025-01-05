import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class ProductDTO {
    @IsString({ message: "O nome deve ser uma string" })
    @IsNotEmpty({ message: "O nome é obrigatório" })
    name: string

    @IsNumber({}, { message: 'O preço deve ser um número' })
    @Min(0.01, { message: 'O preço deve ser maior que 0' })
    price: number

    @IsNumber({}, { message: 'A quantidade deve ser um número' })
    @Min(0, { message: 'A quantidade deve ser maior ou igual a 0' })
    quantity: number
}