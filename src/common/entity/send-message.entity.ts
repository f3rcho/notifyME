export class SendMessageDTO {
  chat_id: number | string;
  disable_web_page_preview?: number;
  disable_notification?: boolean;
  parse_mode?: string;
  text: string;
}
