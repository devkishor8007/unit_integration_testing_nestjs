import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TodoModule } from '../src/todo/todo.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TodoModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/todo (GET)', () => {
    return request(app.getHttpServer()).get('/todo').expect(200);
  });
});
