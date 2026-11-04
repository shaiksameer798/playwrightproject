import{

    test, expect,Locator
}
from '@playwright/test';

import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvData = fs.readFileSync('/Users/2446109/Documents/playwrightdemos/tests/test.csv');
const loginData = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});



loginData.forEach(({username, password, status}:any)=>
{
 test(`Login Test | ${username} | ${status}`, async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



     await page.locator("//input[@name='username']").fill(username);
     await page.locator("//input[@name='password']").fill(password);

     
     await page.locator("//button[@type='submit']").click(); // 
      if(status === "valid"){



await expect(page.getByAltText('client brand banner')).toBeVisible();

      }
      else if(status === "invalid"){


        await expect(page.locator("//div[contains(@class,'oxd-alert-content')]")).toHaveText("Invalid credentials");
      }
      else if(status === "no pssword"){

        await expect(page.locator("//span")).toHaveText("Required");
      }



      await page.waitForTimeout(5000);
 });
});