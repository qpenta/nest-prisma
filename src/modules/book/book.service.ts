import { Injectable } from '@nestjs/common';
import { BookDTO } from './bookdto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class BookService {

    const bookExists = await this.prisma.book.findFirst({
        where: {
            bar_code: data.bar_code,
        }
    })

    if(bookExists) {
        throw new Error('Book already exists');
    }

    constructor(private prisma: PrismaService) { }

    async create(data: BookDTO) {
        const book = await this.prisma.book.create({
            data,
        });

        return book;
    }

}
