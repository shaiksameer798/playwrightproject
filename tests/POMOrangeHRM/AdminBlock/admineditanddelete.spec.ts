

import PIM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/PIM/PIM.ts';
import admin from './admin';
import { test } from '../fixtures/fixtures';

test("Admin ", async ({ page,loginAdmin ,admin}) => {





   


   
   
   const pim=new PIM(page);
   
      


  await admin.admin();


   await page.pause();
  await admin.searchusername();
  await admin.RecordFound();
  await admin.delete();

 await page.pause();

   


}
    );