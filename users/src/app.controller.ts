// users/src/users.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      { id: 1, name: 'Camilla' },
      { id: 2, name: 'Khang' },
    ];
  }
}
