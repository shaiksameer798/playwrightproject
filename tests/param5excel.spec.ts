import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

// Read Excel File
const workbook = XLSX.readFile(
  '/Users/2446109/Documents/playwrightdemos/tests/dataExcelprt.xlsx'
);

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert Excel data to JSON
const loginData: any[] = XLSX.utils.sheet_to_json(worksheet);

// Data Driven Testing
loginData.forEach(({ username, password, status }: any)=> {

  test(`Login Test | ${username} | ${status}`, async ({ page }) => {

    await page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await page.locator("//input[@name='username']").fill(username);

    await page.locator("//input[@name='password']").fill(
      password || ''
    );

    await page.locator("//button[@type='submit']").click();

    if (status === 'valid') {

      await expect(
        page.getByAltText('client brand banner')
      ).toBeVisible();

    } else if (status === 'invalid') {

      await expect(
        page.locator("//div[contains(@class,'oxd-alert-content')]")
      ).toHaveText('Invalid credentials');

    } else if (status === 'no password') {

      await expect(
        page.getByText('Required')
      ).toBeVisible();

    }

    await page.waitForTimeout(5000);

  });

});