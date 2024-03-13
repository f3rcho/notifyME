import { Module } from '@nestjs/common';
import { NotificationService } from './services/nofication.service';
import { NoficationController } from './controller/nofication.controller';

@Module({
  providers: [NotificationService],
  controllers: [NoficationController],
})
export class NoficationModule {}
