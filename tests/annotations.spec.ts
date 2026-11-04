import{

    test, expect
}
from '@playwright/test';



test('test1', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

//skip entire test
test.skip('test2', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');


    console.log('Test 2 executed');
});


//skip test based on certain conditions
test('test3', async ({ page ,browserName}) => {


    test.skip(browserName === 'firefox', 'Skipping test on Firefox');
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');


    console.log('Test 3 executed');
});



test.fail('test4', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');


    console.log('Test 4 executed');
});



test.fixme('test5', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');

    //No Assertion Added in Future

    console.log('Test 5 executed');
});


test('test6', async ({ page }) => {
    test.slow();//triples default Timout 
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');

    //No Assertion Added in Future

    console.log('Test 6 executed');
});