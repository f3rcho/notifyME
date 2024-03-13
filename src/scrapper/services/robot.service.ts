import { Injectable } from '@nestjs/common';
import { InjectPage } from 'nest-puppeteer';
import type { Page } from 'puppeteer';

@Injectable()
export class RobotService {
  constructor(@InjectPage() private readonly page: Page) {}

  async robot(url: string) {
    await this.page.goto(url, { waitUntil: 'networkidle2' });
    const content = await this.page.content();
    return { content };
  }
}
