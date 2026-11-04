import {
    test, expect,
    Page
}
from '@playwright/test';

test ("Verify the label text and others",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com");
await page.getByPlaceholder("Enter Name").fill("Admin");

await page.getByPlaceholder("Enter EMail").fill("Admin@example.com");
});

