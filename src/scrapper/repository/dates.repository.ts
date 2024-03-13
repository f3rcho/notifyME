import type { Browser, Page } from 'puppeteer';
import { Injectable, Logger } from '@nestjs/common';
import { InjectBrowser } from 'nest-puppeteer';
import fs from 'fs';

@Injectable()
export class DatesRepository {
  private readonly logger = new Logger(DatesRepository.name);

  constructor(@InjectBrowser() private readonly browser: Browser) {}

  async create(): Promise<void> {
    try {
      const page = await this.browser.newPage();
      await page.goto('https://ais.usvisa-info.com/es-cl/niv/users/sign_in', {
        waitUntil: 'networkidle2',
      });

      await page.waitForSelector('input[type="email"]');
      await page.waitForSelector('input[type="password"]');

      await page.type('input[type="email"]', 'mackewinsson@gmail.com', {
        delay: 200,
      });
      await page.type('input[type="password"]', 'Palencia1989', { delay: 200 });

      await page.click('input[name="policy_confirmed"]');
      await page.click('input[type="submit"]');
      await page.goto(
        'https://ais.usvisa-info.com/es-cl/niv/schedule/34724450/appointment',
        {
          waitUntil: 'networkidle2',
        },
      );
      await page.click('input[value="Continuar"]');

      this.save(page);
    } catch (error) {
      this.logger.error(`[create] ${error}`);
      this.browser.close();
    }
  }
  private async save(page: Page) {
    return page.on('response', async (response) => {
      if (response.url().includes('son?appointments')) {
        const data = await response.json();
        const bufferData = JSON.stringify(data);

        fs.writeFile('output.json', bufferData, 'utf8', function (err) {
          if (err) {
            console.error(
              '[save] An error occured while writing JSON Object to File.',
              err,
            );
          }

          console.log('[save] JSON file has been saved.');
          console.log('[save]', fs.readFileSync('output.json', 'utf-8'));
        });
      }
    });
  }
}
