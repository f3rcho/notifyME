import { Injectable } from '@nestjs/common';
import { MessageResponse } from 'src/common/entity/message-response.entity';
import { SendMessageDTO } from 'src/common/entity/send-message.entity';
import { User } from 'src/common/entity/user.entity';
import { Methods, TELEGRAM_BOT_TOKEN, TELEGRAM_URL } from '../const/env.const';

import http from '../helper/http.helper';

@Injectable()
export class NotificationService {
  URL = `${TELEGRAM_URL}${TELEGRAM_BOT_TOKEN}/`;

  async getMe(): Promise<User> {
    const config = {
      url: `${this.URL}${Methods.GET}`,
    };
    const { data } = await http<User>(config);
    return data;
  }

  async sendMessage(sendMessageDTO: SendMessageDTO): Promise<MessageResponse> {
    const url = `${this.URL}${Methods.SEND_MESSAGE}`;

    sendMessageDTO = this.settingOptions(sendMessageDTO);

    const config = { url, data: sendMessageDTO };

    try {
      const { data } = await http<any>(config);

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  settingOptions(sendMessageDTO: SendMessageDTO) {
    sendMessageDTO.disable_web_page_preview =
      typeof sendMessageDTO.disable_web_page_preview !== 'undefined'
        ? sendMessageDTO.disable_web_page_preview
        : 1;
    sendMessageDTO.disable_notification =
      typeof sendMessageDTO.disable_notification !== 'undefined'
        ? sendMessageDTO.disable_notification
        : true;
    return sendMessageDTO;
  }
}
