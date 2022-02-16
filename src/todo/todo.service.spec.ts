import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService, PrismaService],
    }).compile();

    service = module.get<TodoService>(TodoService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    prisma.todo.findMany({});
  });

  it('creating todo', () => {
    const createTodo = jest.spyOn(service, 'create');
    const dto = new TodoDto();
    service.create(dto);
    expect(createTodo).toHaveBeenCalledWith(dto);
  });

  it('get Todo', () => {
    const getTodo = jest.spyOn(service, 'getAll');
    service.getAll();
    expect(getTodo).toHaveBeenCalledWith();
  });

  it('delete todo', () => {
    const deleteTodo = jest.spyOn(service, 'delete');
    let id: Prisma.TodoWhereUniqueInput;
    service.delete(id);
    expect(deleteTodo).toHaveBeenCalledWith(id);
  });
});
