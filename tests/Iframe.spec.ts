import {
    test, expect,
    Page
}
from '@playwright/test';

test ("Verify the lFrames  ",async({page})=>{


    await page.goto("https://ui.vision/demo/webtest/frames/");

           

    //total number of frames in the page

    const frames = page.frames();

console.log("Total number of frames in the page is : "+frames.length);


  const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});

  if(frame1!=null)
  {
      // Perform actions within the frame

     await frame1.locator("//*[@name='mytext1']").fill("Hello Frame");

  }
  else
  {
      console.log("Frame not found");
  }


  //Approach 2:using frame locator



   const frame2=page.frameLocator('[src="frame_2.html"]');

   await frame2.locator("//*[@name='mytext2']").fill("Hello Frame 2");





   const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});

   if(frame3!=null)
   {
   await frame3.locator("//*[@name='mytext3']").fill("Hello Frame 3");

   const df = frame3.childFrames();
   console.log("Total number of child frames in frame 3 is : "+df.length);


const radio=df[0].getByLabel('I am a human"');
await
radio.check(); // select radio button

// await expect (radio). toBeChecked();// assertion
   }


        
  await page.waitForTimeout(3000);

});