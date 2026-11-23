import { test, expect } from '@playwright/test';

test('API Interception Test', async ({ page }) => {

  await page.route('**/products.json', async (route) => {

    console.log('API Interception triggered');

    // Send request to actual server and get response
    const response = await route.fetch();

    // Read response body
    const body = await response.json();

    // Modify response
    body.products = body.products.slice(0, 3);

    console.log('Modified Response:', body);

    // Return modified response to browser
    await route.fulfill({
      response,
      
      body: JSON.stringify(body),
    });
  });

  await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

  await page.waitForTimeout(5000);
});


// FLOW
// Browser
// ↓
// page.route()
// ↓
// route.request()
// ↓
// route.fetch()
// ↓
// Server Response
// ↓
// Modify Response
// ↓
// route.fulfill()
// ↓
// Browser Receives Mocked Response