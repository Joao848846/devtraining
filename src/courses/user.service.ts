import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      name: 'teste',
      surname: 'QA',
      email: 'teste@gmail.com',
      age: 10,
    },
  ];

  create(createUserDTO: any) {
    this.users.push(createUserDTO); // Adiciona o novo usuário à lista de usuários
    return createUserDTO; // Retorna o usuário recém-criado
  }

  // Método para retornar todos os usuários
  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const usuario = this.users.find((User) => User.id === id);
    console.log(usuario);
    if (!usuario) {
      throw new NotFoundException(`O id ${id} não tem registro no sistema`);
    }
    return usuario;
  }

  remove(id: number) {
    const index = this.users.findIndex((User) => User.id === id);
    if (index <= 0) {
      this.users.splice(index, 1);
    }
  }
}
