import {
    test, expect,Locator,
    Page
}
from '@playwright/test';

test("Verify the dropdowns",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");


       //Select by Visible Text
    await page.locator("//select[@id='country']").selectOption("Canada");

    await page.waitForTimeout(2000);



 //Select by Value
        await page.locator("//select[@id='country']").selectOption({value:"uk"});
         await page.waitForTimeout(2000);


//Select by Visible Text (Label)
         await page.locator("#country").selectOption({
    label: "India"
});



//Select by Index
await page.locator("#country").selectOption({index:3});







await expect(page.locator("#country")).toHaveValue("germany");


let ds=await page.locator("#country").inputValue();
console.log(ds);

let f:Locator=await page.locator("#country option");


    const d:String[] = (await f.allTextContents()).map(i=>i.trim());
    console.log(d);


    expect(d).toContain("India");
    
 

});