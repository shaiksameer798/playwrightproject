import { expect, Page ,Locator} from '@playwright/test';

export default class AdminTime {
  constructor(private page: Page) {}


async navigateToTimesheet() {
  const time = this.page.getByRole('link', { name: 'Time' });

  await time.waitFor({ state: 'visible' });
  await time.click();





      await expect(this.page.getByRole('heading',{ name: 'Select Employee'})).toBeVisible({timeout: 9000});

    const row=this.page.getByRole('row').filter({ hasText: 'JOHN WICK user' }).and(this.page.getByText('2023-16-01 - 2023-22-01'));



  console.log(await row.textContent());

   await row.getByRole('button',{name:' View '}).click();




        //  const edit = this.page.getByRole('button', { name: ' Edit ' });
        //  await edit.waitFor({ state: 'visible' });
        //  await edit.click();
         
}


}
