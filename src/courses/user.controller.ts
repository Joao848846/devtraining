import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './user.service'; // Certifique-se de que o caminho está correto
import { UserCourseDTO } from './dto/users-login.dto'; // Corrija o caminho do DTO se necessário
import { UpdateCourseDTO } from './dto/update-login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDTO: UserCourseDTO) {
    // Corrija o nome de 'UserService' para 'userService' minúsculo
    return this.userService.create(createUserDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateLoginDTO: UpdateCourseDTO) {
    console.log(updateLoginDTO);
    return this.userService.update(id, updateLoginDTO);
  }
}
