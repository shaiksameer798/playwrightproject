
import{
    test,expect,Page,Locator
} from '@playwright/test';

test("verif assertion",async({page})=>{



    await page.goto("https://testautomationpractice.blogspot.com/");



    let ck:Locator=page.getByRole("checkbox",{name:"Sunday"});

    // await ck.check();
    // await expect(ck).toBeChecked();

    if(!(await ck.isChecked())){

        console.log("checkbox is not checked");
    }

    console.log(await page.getByLabel("gender").textContent());
        
});