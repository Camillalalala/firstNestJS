// gateway/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('overview')
  async getOverview() {
    const [users, clubs] = await Promise.all([
      this.appService.getUsers(),
      this.appService.getClubs(),
    ]);
    return { users, clubs };
  }
}
