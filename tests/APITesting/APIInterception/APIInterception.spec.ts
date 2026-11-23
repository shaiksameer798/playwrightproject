import { test, expect ,request} from '@playwright/test';





test('API Interception Test', async ({ page }) => {




      await page.route('**/products.json', async (route) => {


        console.log("API Interception triggered");



        // const request=route.request();
        // console.log("Request URL:", request.url());
        // console.log("Request Method:", request.method());
        // console.log("Request Headers:", request.headers());
        // await route.continue();

        // console.log("Aborting the request");
        // await route.abort();

        // await route.continue();
       

        

      });

      await page.goto("https://react-shopping-cart-67954.firebaseapp.com/");


  await page.waitForTimeout(5000);

});