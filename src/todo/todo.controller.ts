import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() createTodo: TodoDto) {
    return this.todoService.create(createTodo);
  }

  @Get()
  getTodo() {
    return this.todoService.getAll();
  }

  @Delete()
  deleteTodo(@Param('id') id: number) {
    return this.todoService.delete({ id });
  }
}
