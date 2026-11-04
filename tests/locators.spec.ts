import {
    test,expect, Locator
} from '@playwright/test';
test("Playwright Locators",async({page})=>
    {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      
        let logo: Locator =page.getByAltText("orangehrm-logo").last();
        await expect(logo).toBeVisible();



      await expect(page.getByText("Username : Adm")).toBeVisible();

        await page.getByRole("textbox",{name:"username"}).fill("Admin");

        await page.getByRole("textbox",{name:"password"}).fill("admin123");

        await page.getByRole("button",{name:"Login"}).click();

    });