import { test, expect } from "@playwright/test";

test('test', async ({ page }) => {
 await page.goto('https://www.goibibo.com/hotels/');


  console.log(page.url());
  await page.locator("//span[text()='Check-in']/parent::div").click();

  await page.waitForTimeout(5000);
});