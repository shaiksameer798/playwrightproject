import { test } from '@playwright/test';
import LoginPOM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/LoginPOM.ts';

import PIM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/PIM/PIM.ts';
import admin from './admin';


test("Admin ", async ({ page }) => {





    const Admin=new admin(page);


   const login = new LoginPOM(page);
   
   const pim=new PIM(page);
   
       await login.navigateToLogin();
       await login.login("Admin", "admin123");


  await Admin.admin();


   await page.pause();
  await Admin.searchusername();
  await Admin.RecordFound();
  await Admin.delete();

 await page.pause();

   


}
    );