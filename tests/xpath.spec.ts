import { test, expect, Page, Locator } from '@playwright/test';

test("xpath validation",async({page}) =>{




    await page.goto("https://demowebshop.tricentis.com/");

      let r:Locator=page.locator('//*[@alt="Tricentis Demo Web Shop" or @src="/Themes/DefaultClean/Content/images/logo.png"]');



      await expect(r).toBeVisible();


      await expect(page.locator('//*[contains(@alt,"Tricentis Demo Web Shop")]')).toBeVisible();

            await expect(page.locator('//*[starts-with(@alt,"Tricentis Demo Web Shop")]')).toBeVisible();

            const  products: Locator = page.locator('//h2/a[contains(@href,"computer")]');

 const productCount = await products.count();
 
console.log(productCount);
 
expect(productCount).toBeGreaterThan(0);


const productname:string[] = await products.allTextContents();
    console.log(` first product is ${productname[0]}`);



//     for(let i=0;i<productCount;i++){
// console.log(await products.nth(i).textContent());


//     }


for(let p of productname){
    console.log(p);
}
 

    console.log(await products.nth(0).textContent());
        

});