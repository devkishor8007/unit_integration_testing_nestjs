import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { PrismaService } from '../prisma.service';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

describe('TodoController', () => {
  let controller: TodoController;
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [PrismaService, TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('not create todo', () => {
    const dto = new TodoDto();
    expect(controller.createTodo(dto)).not.toEqual(null);
  });

  it('create todo with dto', () => {
    const dto = new TodoDto();
    controller.createTodo(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('create todo empty', () => {
    expect(service.create).toHaveBeenCalled();
  });

  it('get todo', () => {
    expect(service.getAll()).toHaveBeenCalled();
  });
});
