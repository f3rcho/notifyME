import { Module } from '@nestjs/common';
import { DatesRepository } from './repository/dates.repository';
import { RobotService } from './services/robot.service';
import { PuppeteerModule } from 'nest-puppeteer';

@Module({
  imports: [PuppeteerModule.forRoot()],
  exports: [RobotService, DatesRepository],
  controllers: [],
  providers: [DatesRepository, RobotService],
})
export class ScrapperModule {}
