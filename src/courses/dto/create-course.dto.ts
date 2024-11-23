import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Course } from '../entities/courses.entity';

export class CreateCourseDTO implements Course {
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: `Deu ruim vacilão` })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString({ each: true }) // Valida que cada item do array é uma string
  readonly location: string[];

  @IsNotEmpty()
  @IsInt()
  readonly price: number;

  @IsOptional()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsNumberString()
  readonly whatsApp: string;
}
