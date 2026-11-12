import { expect, Page ,Locator} from '@playwright/test';

export default class TimeSheetEmployee {
  constructor(private page: Page) {}






  async navigateToTimesheet() {


    const time= this.page.getByRole('link', { name: 'Time' });
    
         await expect(time).toBeVisible();

         await expect(time).toBeEnabled();
         await time.click();




         const attend= this.page.getByText('Attendance');
         await expect(attend).toBeVisible();
         await expect(attend).toBeEnabled();
         await attend.click();


         const punchin = this.page.getByRole('menuitem', { name: 'Punch In/Out'});
         await expect(punchin).toBeVisible();
         await expect(punchin).toBeEnabled();
         await punchin.click();


        //  const PunchInText = this.page.getByText('Punch In');
        //  await expect(PunchInText).toBeVisible();
        //  await expect(PunchInText).toHaveText('Punch In');


        //  const inButton = this.page.getByRole('button', { name: 'In' });
        //  await expect(inButton).toBeVisible();
        //  await expect(inButton).toBeEnabled();
        //  await inButton.click();



         const PunchOutText = this.page.getByText('Punch Out');
         await expect(PunchOutText).toBeVisible({ timeout: 9000 });
         await expect(PunchOutText).toHaveText('Punch Out');




         const clcok= this.page.getByPlaceholder('hh:mm');
         await expect(clcok).toBeVisible();
         await expect(clcok).toBeEnabled();
         await clcok.click();
      
         const clcokalert=this.page.getByRole('alert');
         await expect(clcokalert).toBeVisible();
         await expect(clcokalert).toBeEnabled();


const currentime = this.page.locator('.oxd-time-hour-input input');

console.log(await currentime.inputValue());

const downButton = this.page.locator('.oxd-time-hour-input i').last();




  const expected =9;

 

    const hourInput = this.page.locator('.oxd-time-hour-input input');

await hourInput.fill('09');

await expect(hourInput).toHaveValue('09');
         
      

const amRadio = this.page.getByRole('radio').last();

await amRadio.check();

 
 

  }




}