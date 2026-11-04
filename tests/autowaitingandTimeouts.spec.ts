import{

    test, expect
}
from '@playwright/test';

test("verify auto waiting and timeouts",async({page})=>{

    test.setTimeout(40000); // setting test timeout to 40 seconds
   
       await page.goto('https://demowebshop.tricentis.com/');


       //Assetions auto-wait works
await expect (page). toHaveURL ("https://demowebshop.tricentis.com/",{timeout: 40000});

await expect (page. locator ('text=Welcome to our store')). toBeVisible({timeout: 40000});




  //Actions-auto wait works
await page. locator('#small-searchterms'). fill("Laptop",{force: true}); //search box - Force action( it will not so actionalibity checks)
//search box - Force action 
await page. locator('.button-1.search-box-button'). click({force: true}); // clicking on search button - Force action
    

});