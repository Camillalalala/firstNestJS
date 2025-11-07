import { Module } from '@nestjs/common';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { MembersModule } from './members/members.module';

@Module({
  imports: [MembersModule],
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class AppModule {}
