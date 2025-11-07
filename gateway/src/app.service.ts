// gateway/src/app.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

interface Club {
  id: number;
  name: string;
}

@Injectable()
export class AppService {
  async getUsers(): Promise<User[]> {
    const res = await axios.get<User[]>('http://localhost:3001/users');
    return res.data;
  }

  async getClubs(): Promise<Club[]> {
    const res = await axios.get<Club[]>('http://localhost:3002/clubs');
    return res.data;
  }
}
