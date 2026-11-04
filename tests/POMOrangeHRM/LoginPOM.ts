import{

    test, expect,Locator,Page
} from '@playwright/test';



export default class LoginPOM{






    constructor(private page: Page) {
       
    }

    async navigateToLogin()
    {

    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    }

    async login(username: string, password: string)
    {


await this.page.getByRole("textbox",{name: "Username"}).fill(username);
await this.page.getByRole("textbox",{name: "Password"}).fill(password);
await this.page.getByRole("button",{name: "Login"}).click();


  await this.page.waitForURL(/.*dashboard/);

 await  expect(this.page.getByAltText("client brand banner")).toBeVisible();


 await expect(this.page).toHaveURL(/.*dashboard/);



 await expect(this.page.getByRole("heading",{name: "Dashboard"})).toHaveText("Dashboard")


    }


    async VerifyLogout()
    {



        await this.page.locator("//span[@class='oxd-userdropdown-tab']").click();

        await expect(this.page.locator("//ul[@role='menu']")).toBeVisible();
        await this.page.locator("//a[text()='Logout']").click();
        
        await expect(this.page.url()).toContain("/web/index.php/auth/login");
    }


}
    
