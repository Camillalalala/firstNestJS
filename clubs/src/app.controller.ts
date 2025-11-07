// clubs/src/clubs.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import type { createClub } from '../entity/app.entity';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly appService: AppService) {}

  //correct controller methods
  @Get()
  async getClubs() {
    const clubs = await this.appService.getClubs();
    return clubs;
  }
  //@Param() and @Body() need runtime values, not just TypeScript types
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.appService.findOne(name);
  }

  @Post()
  create(@Body() createClub: createClub) {
    return this.appService.create(createClub);
  }
}
