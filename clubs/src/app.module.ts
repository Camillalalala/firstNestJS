import { Module } from '@nestjs/common';
import { ClubsController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';

@Module({
  imports: [MembersModule],
  controllers: [ClubsController],
  providers: [AppService],
})
export class AppModule {}
