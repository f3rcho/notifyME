import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/common/entity/user.entity';
import { NotificationService } from '../services/nofication.service';
import { timer } from '../../common/timer';
import { MessageResponse } from 'src/common/entity/message-response.entity';
import { SendMessageDTO } from 'src/common/entity/send-message.entity';

@Controller('notification')
export class NoficationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get('/')
  getMe(): Promise<User> {
    return this.notificationService.getMe();
  }
  @Post('')
  async sendMessage(
    @Body() sendMessageDTO: SendMessageDTO,
  ): Promise<MessageResponse> {
    await timer.sleep(5);
    return this.notificationService.sendMessage(sendMessageDTO);
  }
}
