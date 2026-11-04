import {
    test,expect,Locator,Page
} from '@playwright/test';


test("table practice",async({page})=>{




    await page.goto("https://practicetestautomation.com/practice-test-table/");



    await page.getByRole("radio",{name:"Java"}).click();


    let s:Locator=page.locator('//table//tbody//tr');

    // let names:String[] = await s.allTextContents();

    // console.log(names);
  let counts:number=await s.count();
  for(let i=0;i<counts;i++){

    console.log(await s.nth(i).locator('td').nth(2).textContent());

  }

  


});


test("second test case",async({page})=>{

 await page.goto("https://practicetestautomation.com/practice-test-table/");
await page.getByRole("checkbox",{name:"Intermediate"}).click();
await page.getByRole("checkbox",{name:" Advanced"}).click();

await page.getByRole("button",{name:"Reset"}).click();


await expect(
    page.getByRole('button', { name: 'Reset' })
).toBeHidden();


});

