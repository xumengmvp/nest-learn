import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  getAllUser() {
    return this.userService.findAll();
  }

  @Post('create')
  createUser() {
    return this.userService.create({
      username: 'test',
      password: 'test',
    });
  }
}
