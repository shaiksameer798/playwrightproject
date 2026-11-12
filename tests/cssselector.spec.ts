import { test, expect,Locator } from '@playwright/test';


test("css selectors", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");



   let  Searcbox:Locator=await page.locator(".product-grid [class='product-title'] a");




   await expect(Searcbox.first()).toBeVisible();

      let titles:String[]=await Searcbox.allTextContents();

// for(let i=0;i<titles.length;i++)
// {

//     console.log(`${i+1} product is ${titles[i]}`);
// }


// for(let i=0;i<await Searcbox.count();i++)
// {
//     console.log(await Searcbox.nth(i).textContent());
// }


// console.log(await Searcbox.first().textContent());


   
console.log(await Searcbox.nth(0).textContent());



})