// clubs/src/clubs.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('clubs')
export class ClubsController {
  @Get()
  getClubs() {
    return [
      { id: 1, name: 'UCLA SWE' },
      { id: 2, name: 'ACM' },
    ];
  }
}
