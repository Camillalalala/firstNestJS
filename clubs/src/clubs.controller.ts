// clubs/src/clubs.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { MembersService } from './members/members.service';
import type { createClub } from '../entity/app.entity';

@Controller('clubs')
export class ClubsController {
  //Dependency Injection: automatically creates instance of AppService and injects it into app
  constructor(
    private readonly clubsService: ClubsService,
    private readonly membersService: MembersService,
  ) {}

  //correct controller methods
  @Get()
  async getClubs() {
    const clubs = await this.clubsService.getClubs();
    return clubs;
  }
  //@Param() and @Body() need runtime values, not just TypeScript types
  @Get(':name')
  async findOne(@Param('name') name: string) {
    const single = await this.clubsService.findOne(name);
    return single;
  }

  @Post()
  create(@Body() createClub: createClub) {
    return this.clubsService.create(createClub);
  }
}
