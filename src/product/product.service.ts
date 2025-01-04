import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './dtos/product';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService) { }

    async createProduct(data: CreateProductDTO) {
        const product = await this.prismaService.products.create({ data })
        return product
    }

    async getProducts() {
        const products = await this.prismaService.products.findMany()
        return products
    }

    async getProduct(id: string) {
        const product = await this.prismaService.products.findUnique({ where: { id: Number(id) } })
        if (!product) throw new NotFoundException('Produto não encontrado')
        return product
    }

    async updateProduct(id: string, data: CreateProductDTO) {
        const product = await this.prismaService.products.update({ where: { id: Number(id) }, data })
        return product
    }

    async deleteProduct(id: string) {
        const product = await this.prismaService.products.findUnique({ where: { id: Number(id) } })
        if(!product) return null
        return await this.prismaService.products.delete({ where: { id: Number(id) } })
    }
}
