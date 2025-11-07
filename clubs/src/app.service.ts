import { Injectable } from '@nestjs/common';

export interface Club {
  id: number;
  name: string;
}

@Injectable()
export class AppService {
  getClubs(): Club[] {
    return [
      { id: 1, name: 'ACM' },
      { id: 2, name: 'UCLA SWE' },
    ];
  }
}
