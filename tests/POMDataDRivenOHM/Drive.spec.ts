import{

    test, expect,Locator,Page
}
from '@playwright/test';



import DriveData from '/Users/2446109/Documents/playwrightdemos/tests/POMDataDRivenOHM/DriveData.ts'; 
import loginData from '/Users/2446109/Documents/playwrightdemos/tests/datajson.json';


loginData.forEach(({username, password,status}:any)=>{




     test(` user name ${username}`, async ({ page }) => {
       
        

     const loginPage = new DriveData(page);
     await loginPage.navigateToLogin();
     await loginPage.login(username, password);
if(status === "valid"){


        await loginPage.verifyLoginSuccess();


      }
      else if(status === "invalid"){


        await loginPage.verifyLoginFailure();
      }
      else if(status === "no pssword"){

        await loginPage.verifyRequiredField();
      }



     });
} );
