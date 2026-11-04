import {
    test, expect,Locator,
    Page
}
from '@playwright/test';





test("Verify dropdown", async ({ page }) => {

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByRole("textbox", { name: "username" }).fill("Admin");

  await page.getByRole("textbox", { name: "password" }).fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/dashboard/);

  await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click();

  await page.locator("(//div[@class='oxd-select-text--after'])[4]").click();

  const r = page.locator("//div[@role='listbox']//span");

const count = await r.count();



let d: String[]=await r.allInnerTexts();
let c: String[]=await r.allTextContents();
for (let i = 0; i < count; i++) {
    const text:String= await r.nth(i).innerText();

       console.log(text);

  }
  console.log("ALLINNER"+d);
  console.log("ALLTEXT"+c);
  
  await page.waitForTimeout(2000);







  const std:Locator[]=await r.all();

  for(let f of std){
    console.log("allawait " + await f.innerText());
  }
});