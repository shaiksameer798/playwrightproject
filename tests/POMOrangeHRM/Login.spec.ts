import { test } from '@playwright/test';
import LoginPOM from './LoginPOM.ts';

import loginData from '/Users/2446109/Documents/playwrightdemos/tests/datajson.json';

test('Login test', async ({ page }) => {

    const login = new LoginPOM(page);



    await login.navigateToLogin();
    await login.login("Admin", "admin123");


});