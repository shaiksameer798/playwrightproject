import {
    test,
    expect,chromium, Page,webkit
} from '@playwright/test';


test("verify tabs ",async ({ }) => {

   const browser=await chromium.launch({
        headless:false
    });

    const context=await browser.newContext();

    const page=await context.newPage();

 await page.goto("https://testautomationpractice.blogspot.com/");






 //2 statements should go in parallel, so we use Promise.all
    //      context.waitForEvent("page");

    //   await page.getByRole("button",{name:"New Tab"}).click();



   const [newPage] = await Promise.all([
       context.waitForEvent("page"),
       page.getByRole("button", { name: "New Tab" }).click()
   ]);


       const pages=await context.pages();

       console.log(await pages[0].title());

        console.log(await pages[1].title());
       console.log("Total number of pages in the context: " + pages.length);

   // Child tab actions
       await pages[1].locator("//input[@title='search' and @name='q']").fill("Playwright");


       // Back to parent tab

       await pages[0].bringToFront();

console.log(await pages[0].title());


    await pages[1].bringToFront();

console.log(await pages[1].title());

});