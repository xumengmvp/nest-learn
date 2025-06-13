import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRespository.find();
  }

  async findOne(username: string) {
    return await this.userRespository.findOne({ where: { username } });
  }

  async create(user: Partial<User>) {
    const newUser = this.userRespository.create(user);
    return await this.userRespository.save(newUser);
  }

  async update(id: string, user: Partial<User>) {
    return await this.userRespository.update(id, user);
  }

  async remove(id: string) {
    return await this.userRespository.delete(id);
  }
}
