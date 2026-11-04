
import{
    test,expect,Page,Locator
} from '@playwright/test';

test("verif assertion",async({browser})=>{



    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");




    //mutiple pop ups



    const [popup] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#PopUp").click()
    ]);


   const pups = await context.pages();

   console.log(pups.length);

        
   for(let f of pups){
      let title=await f.title();

   console.log(title);

   if(title.includes("Fast and reliable end-to-end testing for modern web apps")){
       

        await  f.bringToFront();

      console.log("Brought to front: " + f.url());


    //   await f.locator("//a[text()='Get started']").click();


       await f.getByRole("link", { name: "Get started" }).click();
       await f.close();

      await page.waitForTimeout(3000);

   }

   }


   await pups[0].bringToFront();
    await page.locator("//input[@id='name']").fill("Test Name");




});