import { IsInt, IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // Valida que cada item do array é uma string
  readonly location: string[];

  @IsInt()
  readonly price: number;

  @IsInt()
  readonly whatsApp: number;
}
