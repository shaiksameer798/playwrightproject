import {
    test,expect,Locator,Page
} from '@playwright/test';


test("Verify table",async({page})=>{


 await page.goto("https://practice.expandtesting.com/dynamic-table");


    let e:Locator=page.locator("//table[@class='table table-striped']//th"
    );


let ds:String[] = await e.allInnerTexts();

let fg:number=0;
for(let i=0;i<ds.length;i++){


    if(ds[i].trim()=="CPU")
    {
        fg=i;
    }
}


    let dfg:Locator=page.locator("//table[@class='table table-striped']//tbody//tr");


  let dsa=await dfg.count();

  for(let i=0;i<dsa;i++){

   let sa:String=await dfg.nth(i).innerText();
   if(sa.includes("Chrome"))
   {
        console.log("Chrome is present in row "+i);

        console.log(await dfg.nth(i).locator("td").nth(fg).innerText());
   }

  }


});