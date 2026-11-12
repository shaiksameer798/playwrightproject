import { expect, Locator, Page } from '@playwright/test';

export default class Admin {

    constructor(public page: Page) {}

    async admin() {
        const admin=await this.page.getByRole('link', { name: 'Admin' });

        await expect(admin).toBeVisible();
        await expect(admin).toBeEnabled();
        await admin.click();
        
     

        await expect(
            this.page.getByRole('heading', { name: 'System Users' })
        ).toBeVisible();
    }

    async addbutton() {
        const addButton = this.page.getByRole('button', { name: /Add/i });

        await expect(addButton).toBeVisible();
        await addButton.click();

        await expect(
            this.page.getByRole('heading', { name: 'Add User' })
        ).toBeVisible();
    }

    async AddUser() {

        await expect(
            this.page.getByRole('heading', { name: 'Add User' })
        ).toBeVisible();

        const dropdowns = this.page.locator('.oxd-select-wrapper');

        // User Role
        await dropdowns.first().click();

        const adminOption = this.page.getByRole('option', { name: 'Admin' });

        await expect(adminOption).toBeVisible();
        await adminOption.click();

        await expect(dropdowns.first()).toContainText('Admin');

        // Employee Name
        const employeeName = this.page.getByRole('textbox', {
            name: 'Type for hints...'
        });

        await employeeName.fill('Jobin');

        const employeeOption = this.page.getByRole('option', {
            name: /Jobin Mathew Sam/i
        });

        await expect(employeeOption).toBeVisible();
        await employeeOption.click();

        // Status
        await dropdowns.nth(1).click();

        const enabledOption = this.page.getByRole('option', {
            name: 'Enabled'
        });

        await expect(enabledOption).toBeVisible();
        await enabledOption.click();

        await expect(dropdowns.nth(1)).toContainText('Enabled');

        // Username
        const username = this.page.locator(
            "//label[text()='Username']/parent::div/following-sibling::div//input"
        );

        await expect(username).toBeVisible();

        await username.fill(`testuser${Date.now()}`);

        // Password
        const passwords = this.page.locator("input[type='password']");

        await passwords.first().fill('Admin@12345');
        await passwords.nth(1).fill('Admin@12345');

        // Save
        const saveButton = this.page.getByRole('button', { name: 'Save' });

        await expect(saveButton).toBeEnabled();
        await saveButton.click();

        // Success Toast
        await expect(
            this.page.locator('.oxd-toast')
        ).toBeVisible({ timeout: 10000 });
    }



     async searchusername()
     {


        const systemUsersHeading = this.page.getByRole('heading', { name: 'System Users' });
        await expect(systemUsersHeading).toBeVisible({ timeout: 10000 });

       const username=this.page.locator("//label[text()='Username']//parent::div//following-sibling::div//input");

       await expect(username).toBeVisible();

       await expect(username).toBeEnabled();

       await username.fill('Sssss');


         const searchbutton=this.page.getByRole('button', { name: 'Search' });
         await expect(searchbutton).toBeVisible();
         await expect(searchbutton).toBeEnabled();
         await searchbutton.click();
         
     }
     

     async RecordFound()
     {
        const noRecordsFound: Locator = this.page.getByRole('row');
        await expect(noRecordsFound.nth(1)).toBeVisible();

        const recordText = await noRecordsFound.nth(1).textContent();
        console.log('Record Text:', recordText);

            // await expect(recordText).toContain('Jobinsam@6742');


            await noRecordsFound.nth(1).locator('button').first().click();
        

     }


    async delete() {

    const dialog = this.page.getByRole('dialog');

    await expect(dialog).toBeVisible();

    const confirmDeleteButton = dialog.getByRole('button', {
        name: /Yes, Delete/i
    });

    await expect(confirmDeleteButton).toBeVisible();
    await confirmDeleteButton.click();
}



  async logout()
  {


     const profileMenu = this.page.locator('.oxd-userdropdown-tab');
     await expect(profileMenu).toBeVisible();
     await expect(profileMenu).toBeEnabled();
     await profileMenu.click();

     const logoutMenuItem = this.page.getByRole('menuitem', { name: 'Logout' });
     await expect(logoutMenuItem).toBeVisible();
     await expect(logoutMenuItem).toBeEnabled();
     await logoutMenuItem.click();

  }
}
