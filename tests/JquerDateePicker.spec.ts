import {
    test, expect,
    Page,
    Locator
}
from '@playwright/test';


test('Jquery Datepicker test', async ({ page}) => {



    await page.goto("https://testautomationpractice.blogspot.com/");



    await expect(page.locator("//input[@id='datepicker']")).toBeVisible();
    // await page.locator("//input[@id='datepicker']").fill('12/31/2024');

  //Appraoch 2: using date picker

  const dateInput:Locator=await page.locator("//input[@id='datepicker']");

        await dateInput.click();

        const exppectedYear = '2026';
        const exppectedMonth = 'December';

        let expectedDay = '24';
        let currentYear = await page.locator(".ui-datepicker-year").textContent();
        let currentMonth = await page.locator(".ui-datepicker-month").textContent();

        while(currentYear !== exppectedYear || currentMonth !== exppectedMonth)
            {



                await page.locator("//a[@data-handler='next']").click();
                currentYear = await page.locator(".ui-datepicker-year").textContent();
                currentMonth = await page.locator(".ui-datepicker-month").textContent();


            }
            const expectedDate = '30';

await page.locator(`//table[@class='ui-datepicker-calendar']//a[text()='${expectedDate}']`).click();

 



});
