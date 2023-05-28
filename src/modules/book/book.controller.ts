import { Body, Controller, Post, Delete, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './bookdto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Delete()
  async delete(@Body() data: string) {
    return this.bookService.delete(data);
  }
}
