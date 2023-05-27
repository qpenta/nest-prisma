import { Injectable } from '@nestjs/common';
import { BookDTO } from './bookdto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) { }

    async create(bookData: BookDTO) {
        const bookExists = await this.prisma.book.findFirst({
            where: {
                bar_code: bookData.bar_code,
            }
        })

        if (bookExists) {
            throw new Error('Book already exists');
        }

        const book = await this.prisma.book.create({
            data: bookData,
        })

        return book
    }

    async delete(data: string) {
        const barCodeExists = await this.prisma.book.findUnique({
            where: {
                bar_code: data["bar_code"]
            }
        })

        if (!barCodeExists) {
            throw new Error('This barcode does not exist')
        }

        return await this.prisma.book.delete({
            where: {
                bar_code: data["bar_code"],
            }
        })
    }

}
