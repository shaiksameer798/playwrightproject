import {
    test,
    expect,chromium, Page,webkit
} from '@playwright/test';




test('test1',{ tag: ['@smoke'] }, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('Test 1 executed');
});

test('test2', {tag:['@regression','@sanity','@smoke']}, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('Test 2 executed');
});




