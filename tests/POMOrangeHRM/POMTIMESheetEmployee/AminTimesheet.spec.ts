import { test } from '../fixtures/fixtures';


import TimeSheetEmployee from './Timesheetemployee';

test("ADMIN Timesheet Test", async ({ page ,loginAdmin, AMTimesheet}) => {
  
 
      
 await AMTimesheet.navigateToTimesheet();

 await page.pause();
    

});