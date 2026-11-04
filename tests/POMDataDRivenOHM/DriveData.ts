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




    }



    async verifyLoginSuccess()
    {
        await expect(this.page.getByAltText('client brand banner')).toBeVisible();
    }
    async verifyLoginFailure()
    {
                await expect(this.page.locator("//div[contains(@class,'oxd-alert-content')]")).toHaveText("Invalid credentials");
    }

    async verifyRequiredField()
    {
                await expect(this.page.locator("//span")).toHaveText("Required");
    }

}