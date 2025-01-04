import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { ProductService } from './product.service';
import { CreateProductDTO } from './dtos/product';

@Controller('produtos')
export class ProductController {
    constructor(private productService: ProductService){}
    
    @UsePipes(ValidationPipe)
    @Post('')
    async createProduct(@Body() body: CreateProductDTO) {
        return await this.productService.createProduct(body)
    }

    @Get('')
    async getProducts() {
        return await this.productService.getProducts()
    }

    @Get(':id')
    async getProduct(@Param('id') id) {
        return await this.productService.getProduct(id)
    }

    @Put(':id')
    async updateProduct(@Param('id') id, @Body() body: CreateProductDTO) {
        return await this.productService.updateProduct(id, body)
    }

    @Delete(':id')
    @HttpCode(200)
    async deleteProduct(@Param('id') id) {
        const product =  await this.productService.deleteProduct(id)
        if(!product) throw new NotFoundException('Produto não encontrado')
        return product
    }
}
