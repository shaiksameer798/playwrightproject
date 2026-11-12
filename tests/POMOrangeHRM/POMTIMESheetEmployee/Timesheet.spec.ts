

import TimeSheetEmployee from './Timesheetemployee';
import { test } from '../fixtures/fixtures';

test("Timesheet Employee Test", async ({ loginEmployee,page ,time}) => {





    await time.navigateToTimesheet();
    await page.pause();
});
