import{

    test, expect
}
from '@playwright/test';

test("verify url",async({page})=>{

   
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    

});