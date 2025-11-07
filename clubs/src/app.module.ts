import { Module } from '@nestjs/common';
import { ClubsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ClubsController],
  providers: [AppService],
})
export class AppModule {}
