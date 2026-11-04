import {
    test, expect,Locator,
    Page
}
from '@playwright/test';

test("Verify the dropdowns",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");


       //Select by Visible Text
    await page.locator("//select[@id='colors']").selectOption(["Red","Yellow","Green"]);

    await page.waitForTimeout(2000);



 //Select by Value
        await page.locator("//select[@id='colors']").selectOption([{index:1},{index:2}]);
         await page.waitForTimeout(2000);


//Select by Visible Text (Label)
         await page.locator("#colors").selectOption([
    {label: "Red"},
    {label: "Yellow"}
]);








let ds=await page.locator("#colors").inputValue();
console.log(ds);

let f:Locator=await page.locator("#colors option");


    const d:String[] = (await f.allTextContents()).map(i=>i.trim());
    console.log(d);

expect(d.length).toBeGreaterThan(1);
    expect(d).toContain("Red");
    expect(d).toContain("Yellow");
    expect(d).toContain("Green");


    
    

    let fm:Locator=await page.locator("#animals option");
 const animal:String[] = (await fm.allTextContents()).map(i=>i.trim());
    console.log(animal);

let r:String[]=animal;

    r.sort();

    console.log(r);

    expect(animal).toEqual(r);


});