import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';
import { NoficationModule } from './nofication/nofication.module';

@Module({
  imports: [ScrapperModule, ScheduleModule.forRoot(), NoficationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
