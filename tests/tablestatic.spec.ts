import {
    test,expect,Locator,Page
} from '@playwright/test';



test(" Verify the table static",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

let cd:Locator=page.locator("//table[@name='BookTable']//tr");


    const rowCount = await cd.count();
    console.log("Number of rows: " + rowCount);






    for(let i=1;i<rowCount;i++){

        let H=await cd.nth(i).locator("td").nth(1).textContent();
       if(H?.trim()=="Mukesh")
       {
         console.log(await cd.nth(i).locator("td").nth(2).textContent());
       }

    }

    let sum:number=0;
    for(let i=1;i<rowCount;i++){

        sum=sum+parseInt((await cd.nth(i).locator("td").nth(3).textContent())!);

    }

    console.log("Sum of all prices: " + sum);



    
});