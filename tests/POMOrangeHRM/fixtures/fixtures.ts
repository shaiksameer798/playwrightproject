import { test as base } from '@playwright/test';
import LoginPOM from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/LoginPOM.ts';
import Admin from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/AdminBlock/admin.ts';

import TimeSheetEmployee from '../POMTIMESheetEmployee/Timesheetemployee'; 

import AdminTime from '/Users/2446109/Documents/playwrightdemos/tests/POMOrangeHRM/POMTIMESheetEmployee/AdminTime.ts';
import PIM from '../PIM/PIM';


type MYFixtures = {
    loginPOM: LoginPOM;
    admin: Admin;
    pim:PIM;
    loginAdmin: LoginPOM;
   loginEmployee: LoginPOM;

   time: TimeSheetEmployee;

   AMTimesheet:AdminTime;
};

export const test = base.extend<MYFixtures>({



    loginPOM:async({page},use)=>{

        const loginPOM = new LoginPOM(page);
        await use(loginPOM);
    },
    admin:async({page},use)=>{
        const admin = new Admin(page);
        await use(admin);
    },
      pim:async({page},use)=>{


        const pim = new PIM(page);
        await use(pim);
      },
      loginAdmin:async({page},use)=>{
        const loginAdmin = new LoginPOM(page);

   await loginAdmin.navigateToLogin();
       await loginAdmin.login("Admin", "admin123");

        await use(loginAdmin);
      },
      loginEmployee:async({page},use)=>{
        const loginEmployee = new LoginPOM(page);

        await loginEmployee.navigateToLogin();
        await loginEmployee.login("shaiksamreenEX", "samreen798115@");

        await use(loginEmployee);
      },


      time:async({page},use)=>{
        const time = new TimeSheetEmployee(page);
        await use(time);
      },
      AMTimesheet:async({page},use)=>{
        const AMTimesheet = new AdminTime(page);
        await use(AMTimesheet);
      },
});
export { expect } from '@playwright/test';