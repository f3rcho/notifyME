import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DatesRepository } from './scrapper/repository/dates.repository';
import { RobotService } from './scrapper/services/robot.service';

@Injectable()
export class AppService {
  constructor(
    private scrapper: RobotService,
    private repository: DatesRepository,
  ) {}
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World from server 🎃';
  }

  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_9AM, { name: 'notifications' })
  @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_10PM, { name: 'notifications' })
  async handleCron(): Promise<void> {
    // const value = await this.scrapper.robot(
    //   'https://ais.usvisa-info.com/es-cl/niv/users/sign_in',
    // );
    await this.repository.create();
    this.logger.debug(`Called every ${CronExpression.MONDAY_TO_FRIDAY_AT_9AM}`);
  }
}
