import { test } from '../fixtures/fixtures';

import PIM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/PIM/PIM.ts';
import admin from './admin';


test("Admin ", async ({loginPOM,admin, page,pim, loginAdmin }) => {








   const login = loginPOM;
   
  
   
      


  await admin.admin();


await admin.addbutton();


// await admin.AddUser();

// await admin.searchusername();
  




  await page.pause();

});
test.afterEach(async ({ admin }) => {
  await admin.logout();
});
   


