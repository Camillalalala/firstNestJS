import { Injectable } from '@nestjs/common';
import { Club, createClub } from '../entity/app.entity';

@Injectable()
export class AppService {
  //Mock Data
  private clubs: Club[] = [
    { id: 1, name: 'ACM' },
    { id: 2, name: 'UCLA SWE' },
  ];
  async getClubs(): Promise<Club[]> {
    return await Promise.resolve(this.clubs);
  }

  async findOne(name: string): Promise<Club | undefined> {
    return await Promise.resolve(this.clubs.find((club) => club.name === name));
  }

  async create(createClub: createClub): Promise<Club> {
    const newClub = { ...createClub, id: this.clubs.length + 1 };
    this.clubs.push(newClub);
    return await Promise.resolve(newClub);
  }
}
