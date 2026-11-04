import{

    test, expect,Locator
}
from '@playwright/test';


//testdata





// for(const item of searchItems){

// test(`login test ${item}`, async ({ page }) => {
// await page.goto('https://demowebshop.tricentis.com/');

// await
// page.locator('#small-searchterms').fill(item); // fill the text in search box
// await
// page.locator("input[value='Search']").click();
// // click on the button


// await expect(page.locator("//h2/a").nth(0)).toContainText(item,{ignoreCase: true});

// });

// }




//using for each function
// searchItems.forEach(item => {
//     test(`login test ${item}`, async ({ page }) => {
//         await page.goto('https://demowebshop.tricentis.com/');

//         await page.locator('#small-searchterms').fill(item); // fill the text in search box
//         await page.locator("input[value='Search']").click();
//         // click on the button

//         await expect(page.locator("//h2/a").nth(0)).toContainText(item,{ignoreCase: true});
//     });
// });
        


const loginTestData: string[][] = [
  ["Admin", "admin123", "valid"],
  ["Admin12", "wrongpassword", "invalid"],
  ["Admin@gmail.com", "", "no pssword"]
];


loginTestData.forEach(([email, password, status])=>
{
 test(`login test for ${email}`, async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



     await page.locator("//input[@name='username']").fill(email);
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

 });
});