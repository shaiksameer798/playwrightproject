import{

    test, expect,Locator
}
from '@playwright/test';

// test("verify pagination table",async({page})=>{

   
// await page.goto("https://practice.expandtesting.com/dynamic-pagination-table");




// let noogitems:Locator=page.locator("//ul[@class='pagination']//li[position()>1]//a");


// for(let i=1;i<await noogitems.count()-1;i++){


//       await noogitems.nth(i).click();

//  let pagedata:Locator=page.locator("//table[@id='example']/tbody//tr");
  
        

//            let df:String[]=(await pagedata.allTextContents()).map(i=>i.trim());
//               console.log(df);


 
  
// }

    

// });


test("verify pagination table with next button",async({page})=>{



    let cd:number=5;

    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table");


    let slt:Locator=page.locator("//select[@name='example_length']");

    await slt.selectOption(cd.toString());



    let fd:Locator=page.locator("//table[@id='example']/tbody//tr");


    let cnts:number=await fd.count();

    console.log("Number of rows in first page: "+cnts);




    await page.locator("//input[@type='search']").fill("Alice");


        let fds:Locator=page.locator("//table[@id='example']/tbody//tr");
        const dfg:String[]=(await fds.allTextContents()).map(i=>i.trim());
        console.log(dfg);

});