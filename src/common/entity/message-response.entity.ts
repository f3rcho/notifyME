export class MessageResponse {
  ok: boolean;
  result: Result;
}

interface Result {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  text: string;
}

interface Chat {
  id: number;
  title: string;
  type: string;
  all_members_are_administrators: boolean;
}

interface From {
  id: number;
  is_bot: boolean;
  first_name: string;
  username: string;
}
