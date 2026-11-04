import { expect, Page ,Locator} from '@playwright/test';

export default class Admin {





    constructor(public page: Page) {}


    

    async admin()
    {

        await this.page.getByRole('link', { name: 'Admin'} ).click();


        await expect(this.page.getByRole('heading',{name:'System Users'})).toBeVisible({timeout:6000});
    }


 

    async addbutton() {
    const addButton = this.page.getByRole('button', { name: /Add/i });

    await expect(addButton).toBeVisible();
    await addButton.click();
}

    async AddUser()
    {

        await  expect(this.page.getByRole('heading', { name: 'Add User' })).toBeVisible();


  

    }




}