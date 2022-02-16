import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.TodoCreateInput) {
    return this.prismaService.todo.create({ data });
  }

  getAll() {
    return this.prismaService.todo.findMany({});
  }

  delete(id: Prisma.TodoWhereUniqueInput) {
    return this.prismaService.todo.delete({ where: id });
  }
}
