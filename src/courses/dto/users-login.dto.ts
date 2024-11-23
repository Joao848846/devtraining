import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { Users } from '../entities/user.entity';

export class UserCourseDTO implements Users {
  id: number;
  @IsNotEmpty()
  @IsString()
  @MinLength(5, { message: `Erro ao criar nome não contém o mínimo` })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10, { message: `Erro ao criar nome não contém o mínimo` })
  surname: string;

  @IsEmail({}, { message: `O e-mail precisa ser valido.` })
  email: string;

  @Min(18, { message: `A idade mímina são 18 anos` })
  @Max(100, { message: `A idade máxima do sistema` })
  age: number;
}
