import { Injectable, NotFoundException } from '@nestjs/common';
import { Club, createClub } from '../entity/app.entity';

@Injectable()
export class AppService {
  //Using in-memory array to simulate database but irl, actual DB is used and async would be necessary
  private clubs: Club[] = [
    { id: 1, name: 'ACM' },
    { id: 2, name: 'UCLA SWE' },
  ];
  async getClubs(): Promise<Club[]> {
    return await Promise.resolve(this.clubs);
  }

  async findOne(name: string): Promise<Club> {
    const club = this.clubs.find((c) => c.name === name);
    if (!club) {
      throw new NotFoundException(`Club with name "${name}" does not exist`);
    }
    return await Promise.resolve(club);
  }

  async create(createClub: createClub): Promise<Club> {
    const newClub = { ...createClub, id: this.clubs.length + 1 };
    this.clubs.push(newClub);
    return await Promise.resolve(newClub);
  }
}
