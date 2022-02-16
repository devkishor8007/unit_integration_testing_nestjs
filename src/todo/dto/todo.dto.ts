import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEmpty()
  desc: string;
}
