// clubs/src/clubs.controller.ts
import { Controller, Get, Post } from '@nestjs/common';

@Controller('clubs')
export class ClubsController {
  @Get()
  getClubs() {
    return [
      { id: 1, name: 'UCLA SWE' },
      { id: 2, name: 'ACM' },
    ];
  }
  @Get('finding')
  findClubs() {
    return 'Finding clubs...';
  }
  @Post()
  createClub() {
    return 'Club created successfully';
  }
}
