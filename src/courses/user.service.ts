import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {
    console.log('Repositório injetado?', !!userRepository);
  }

  async create(createUserDTO: any) {
    const user = this.userRepository.create(createUserDTO);
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const usuario = await this.userRepository.findOne({
      where: { id },
    });
    if (!usuario) {
      throw new NotFoundException(`O id ${id} não tem registro no sistema`);
    }
    return usuario;
  }

  async remove(id: number) {
    const index = await this.userRepository.findOne({
      where: { id },
    });
    if (!index) {
      throw new NotFoundException(`Registro não encontrado`);
    }
    return this.userRepository.remove(index);
  }

  async update(id: number, updateUserDTO: any) {
    const nanny = await this.userRepository.preload({
      ...updateUserDTO,
      id,
    });
    if (!nanny) {
      throw new NotFoundException(`Registro não encontrado no sistema`);
    }
    return this.userRepository.save(nanny);
  }
}
