import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search (Meta+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('ifr');
  await page.getByRole('link', { name: 'Handle iframes Code Execution' }).click();


  
});