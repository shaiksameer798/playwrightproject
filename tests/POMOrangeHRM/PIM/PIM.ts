import { expect, Page ,Locator} from '@playwright/test';

export default class PIM {
  constructor(private page: Page) {}

  async navigateToPIM() {
    const pimLink = this.page.getByRole('link', { name: 'PIM' });

    await expect(pimLink).toBeVisible({ timeout: 9000 });
    await pimLink.click();

    await expect(
      this.page.getByRole('heading', { name: 'Employee Information' })
    ).toBeVisible();
  }

  async addEmployee() {
    // Add button
    const addBtn = this.page.getByRole('button', { name: 'Add' });

    await expect(addBtn).toBeVisible();
    await expect(addBtn).toBeEnabled();

    await addBtn.click();

    // Add Employee page
    await expect(
      this.page.getByRole('heading', { name: 'Add Employee' })
    ).toBeVisible();

    // First Name
    const firstName = this.page.locator('input[name="firstName"]');
    await expect(firstName).toBeVisible();
    await firstName.fill('sameer');

    // Last Name
    const lastName = this.page.locator('input[name="lastName"]');
    await expect(lastName).toBeVisible();
    await lastName.fill('shaik');

    // Save
    const saveBtn = this.page.getByRole('button', { name: 'Save' });

    await expect(saveBtn).toBeVisible();
    await expect(saveBtn).toBeEnabled();

    await saveBtn.click();

    // Verify employee created
    await expect(
      this.page.getByRole('heading', { name: 'Personal Details' })
    ).toBeVisible({ timeout: 20000 });
  }

  async verify() {
    console.log(await this.page.url());



    this.page.getByRole('heading', { name: 'Personal Details' });

   console.log(await this.page.locator("//label[text()='Employee Id']//parent::div//following-sibling::div//input").inputValue());
    

        const jobtitle=await this.page.locator("//a[text()='Job']");
            await  expect(jobtitle).toBeVisible();
            await expect(jobtitle).toBeEnabled();
            await jobtitle.click({timeout: 5000});



            await expect(this.page.getByRole('heading', { name: 'Job Details' })).toBeVisible({ timeout: 50000 });




          const dropdowns = this.page.locator('.oxd-select-wrapper');

await dropdowns.nth(0).click();






const op = this.page.locator('div[role="listbox"] div');
const option = this.page.locator(
  'div[role="listbox"] div'
).filter({
  hasText: 'Automaton Tester'
});


  const printoption = await option.textContent(); 
  // console.log("Selected option: ", printoption);

  for(let i=0;i<await op.count();i++){
    const optionText = await op.nth(i).textContent();
    console.log(`Option ${i}: `, optionText);
  }

await expect(option).toBeVisible({ timeout: 10000 });

await option.click();





await dropdowns.nth(1).click();
await this.page.getByRole('option', { name: 'Professionals' }).click({timeout:8000});

await dropdowns.nth(2).click();
await this.page.getByRole('option', { name: 'Quality Assurance' }).click({timeout:8000});




const employmentStatus = this.page.locator(
  "//div[normalize-space()='Employment Status']/parent::*//div[contains(@class,'oxd-select-wrapper')]"
);

await expect(employmentStatus).toBeVisible();
console.log("Before Employment Status");
await employmentStatus.click();

console.log("Dropdown Opened");

await expect(
  employmentStatus
).toContainText('Full-Time Permanent');
const optionEmprole=this.page.locator("//div[@role='listbox']//span[text()='Full-Time Permanent']");


 await expect(optionEmprole).toBeVisible();
   await  optionEmprole.click();
console.log("Option Selected");
console.log("Selected Employment Status");




  }





  async savebutton()
    {

   const saveb = this.page.getByRole('button', { name: 'Save' });

await expect(saveb).toBeEnabled({timeout:8000});
await saveb.click();

await this.page.pause();
    
    }

    async container()
    {

        let container:Locator= this.page.locator(".oxd-table-body>div>[role='row']");

    
        await expect(container.first()).toBeVisible();
expect(await container.count()).toBeGreaterThan(0);


//          for(let i=0;i<await container.count();i++){
//           const text: any = await container.nth(i).textContent();
//  if(text.includes('manda akhil'))
//   {
//       console.log(`Found 'manda akhil' in row ${i}: `, text);
//   }


const thirdRow = this.page
  .locator(".oxd-table-body [role='row']")
  .nth(2);

   
        console.log(  await thirdRow.textContent());

    await thirdRow.locator(".oxd-table-cell-actions>button").nth(1).click();

    

    // }





     const areusure=this.page.getByRole('dialog');
     await expect(areusure).toBeVisible();



     await this.page.getByRole('button',{name:' Yes, Delete '}).click();

     await this.page.pause();

  }
}