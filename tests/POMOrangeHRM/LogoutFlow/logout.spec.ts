import { test } from '@playwright/test';
import LoginPOM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/LoginPOM.ts';



test('Login test', async ({ page }) => {

    const login = new LoginPOM(page);



    await login.navigateToLogin();
    await login.login("Admin", "admin123");

    await login.VerifyLogout();

});