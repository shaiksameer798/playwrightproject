import {
    test, expect,
    Page,
    Locator
}
from '@playwright/test';



let page: Page;

test.beforeEach("Opean site", async ({ browser }) => {
    page = await browser.newPage();

await page.goto("https://www.demoblaze.com/index.html");

    await page.getByRole("link", { name: "Log in" }).click();

      await page.locator("//input[@id='loginusername']").fill("pavanol");
      await page.locator("//input[@id='loginpassword']").fill("test@123");
      await page.locator("//a[text()='Log in']").click();
      



});



// test("Findno of Product", async () => {



//        let f:Locator = await page.locator("//div[@id='tbodyid']//div[@class='card h-100']");


//        await expect(f.first()).toBeVisible();
//        let count=await f.count();
//        console.log(count);

// });



test("Another test", async () => {
    

      let f:Locator = await page.locator("//div[@id='tbodyid']//div[@class='card h-100']");


       await expect(f.first()).toBeVisible();

    await page.getByRole("link",{name:"Samsung galaxy s6"}).click();



    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    });
        

  await page.getByRole("link", { name: "Add to cart" }).click();



  await page.locator("//a[text()='Cart']").click();


  await expect(page.locator("//table[@class='table table-bordered table-hover table-striped']")).toBeVisible();

});
test.afterEach(async () => {

    await page.getByRole("link", { name: "Log out" }).click();
    //    await page.close();
});