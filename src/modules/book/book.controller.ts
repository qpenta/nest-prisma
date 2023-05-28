import { Body, Controller, Post, Delete, Get, Put, Param } from '@nestjs/common';
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

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }


  @Delete()
  async delete(@Body() data: string) {
    return this.bookService.delete(data);
  }
}
