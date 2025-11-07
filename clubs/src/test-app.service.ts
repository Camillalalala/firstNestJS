import { AppService } from './app.service';

async function test() {
  const service = new AppService();

  console.log('All clubs:', await service.getClubs());

  console.log('Find one club:', await service.findOne('UCLA SWE'));

  const newClub = await service.create({ name: 'ACM Jr' });
  console.log('Created club:', newClub);

  console.log('All clubs after creation:', await service.getClubs());
}

test().catch(console.error);
