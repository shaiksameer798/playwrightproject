import { test } from '@playwright/test';
import LoginPOM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/LoginPOM.ts';

import PIM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/PIM/PIM.ts';


test.setTimeout(60000);
test('Login test', async ({ page }) => {

    const login = new LoginPOM(page);



    await login.navigateToLogin();
    await login.login("Admin", "admin123");

    const pim = new PIM(page);
     
        await pim.navigateToPIM();

  
await pim.container();

   
   

});