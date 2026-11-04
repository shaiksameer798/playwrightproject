import {
    test,expect,Locator,Page
} from '@playwright/test';


test('take a screenshot', async ({ page }) => 
{


    await page.goto('https://demowebshop.tricentis.com/');



    //pagescreenshot with timestamp
    // const timestamp=Date.now();
    // await page.screenshot({path:`/Users/2446109/Documents/playwrightdemos/screenshots/screenshot_${timestamp}.png`});
    


    // //full page screenshot
    // await page.screenshot({path:`/Users/2446109/Documents/playwrightdemos/screenshots/fullpage_${timestamp}.png`, fullPage: true});





    //element screen shot

        let logo= await page.locator('img[alt="Tricentis Demo Web Shop"]');
        await logo.screenshot({path:`/Users/2446109/Documents/playwrightdemos/screenshots/logo_${Date.now()}.png`});

   await page.locator("//div[@class='product-grid home-page-product-grid']").screenshot({path:`/Users/2446109/Documents/playwrightdemos/screenshots/productgrid_${Date.now()}.png`});

   

});