import { Body, Controller, Post, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './bookdto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Delete()
  async delete(@Body() data: string) {
    return this.bookService.delete(data);
  }
}
