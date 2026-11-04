import {
    test,expect,Locator,Page
} from '@playwright/test';



const loginTestData: string[][] = [
  ["Admin", "admin123", "valid"],
  ["Admin12", "wrongpassword", "invalid"],
  ["Admin@gmail.com", "", "no pssword"]
];
test("example test", async ({  }) => {




loginTestData.forEach(([username, password, status]) => {
    console.log(`Username: ${username}, Password: ${password}, Status: ${status}`);
});
       

});