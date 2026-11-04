import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await expect(page.getByRole('navigation', { name: 'Top languages' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Wikipedia');
  await page.getByText('The Free Encyclopedia').click();
  await page.getByText('The Free Encyclopedia').click();
  await expect(page.getByRole('navigation', { name: 'Top languages' })).toMatchAriaSnapshot(`
    - navigation "Top languages":
      - link /English \\d+,\\d+,\\d+\\+ articles/:
        - /url: //en.wikipedia.org/
        - strong: English
        - text: ""
      - link /日本語 \\d+,\\d+,\\d+\\+ 記事/:
        - /url: //ja.wikipedia.org/
        - strong: 日本語
        - text: ""
      - link /Deutsch \\d+\\.\\d+\\.\\d+\\+ Artikel/:
        - /url: //de.wikipedia.org/
        - strong: Deutsch
        - text: ""
      - link /Français 2 \\d+ \\d+\\+ articles/:
        - /url: //fr.wikipedia.org/
        - strong: Français
        - text: ""
      - link /Русский 2 \\d+ \\d+\\+ статей/:
        - /url: //ru.wikipedia.org/
        - strong: Русский
        - text: ""
      - link /Español \\d+\\.\\d+\\.\\d+\\+ artículos/:
        - /url: //es.wikipedia.org/
        - strong: Español
        - text: ""
      - link /Italiano \\d+\\.\\d+\\.\\d+\\+ voci/:
        - /url: //it.wikipedia.org/
        - strong: Italiano
        - text: ""
      - link /中文 \\d+,\\d+,\\d+\\+ 条目 \\/ 條目/:
        - /url: //zh.wikipedia.org/
        - strong: 中文
        - text: ""
      - link /Português \\d+\\.\\d+\\.\\d+\\+ artigos/:
        - /url: //pt.wikipedia.org/
        - strong: Português
        - text: ""
      - link /Polski 1 \\d+ \\d+\\+ haseł/:
        - /url: //pl.wikipedia.org/
        - strong: Polski
        - text: ""
    `);
  await page.getByRole('navigation', { name: 'Top languages' }).click();
});