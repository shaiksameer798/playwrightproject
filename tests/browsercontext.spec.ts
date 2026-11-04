import { test, chromium, Page, expect,webkit } from "@playwright/test";




// Browser ---› Context ----› pages
//Browser ---› chromium, firefox, webkit
//Contexts ---> we can have multiple contexts for multiple users/apps for the same browser
//provide a way to operate multiple independent browser sessions.
//page ---> New Tab, Window, Popup
test("verify browser context ",async ({ }) => {

 const browser = await chromium.launch({
        headless: false
    });


     const browser2 = await webkit.launch({
        headless: false

    });


    const context = await browser.newContext();


    const context2= await browser2.newContext();

    const page: Page = await context.newPage();


    const page1: Page = await context2.newPage();
   

    await page.goto(
        "https://testautomationpractice.blogspot.com/"
    );

   
    await page1.goto("https://playwright.dev/");



    let p1 = await page1.title();
    console.log(p1);

    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

 


    await browser.close();
    await browser2.close();
});