import {
    test, expect,Locator,
    Page
}
from '@playwright/test';

test("Verify the Dialogs",async({page})=>{


//simple dialoug box


 await page.goto("https://testautomationpractice.blogspot.com/");



 //Enable alert Handler
  page.on("dialog",(dialog)=>{
    console.log("Dialog type is",dialog.type());
    console.log("Dialog message is",dialog.message());


    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("I am an alert box!");
      dialog.accept();

});
 await page.getByRole("button",{name:"Simple Alert"}).click();

});

test("Verify the Confirm Dialog",async({page})=>{


//simple dialoug box


 await page.goto("https://testautomationpractice.blogspot.com/");



 //Enable alert Handler
  page.on("dialog",(dialog)=>{
    console.log("Dialog type is",dialog.type());
    console.log("Dialog message is",dialog.message());


    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    //   dialog.accept();
    dialog.dismiss();

});
 await page.getByRole("button",{name:"Confirmation Alert"}).click();

      let message: string | null = await page.locator("//p[@id='demo']").textContent();

    //   expect(message).toBe("You pressed OK!");

    expect(message).toContain("You pressed Cancel!");
      console.log(message);


});
test.only("Verify the Prompt Dialog",async({page})=>{


//simple dialoug box


 await page.goto("https://testautomationpractice.blogspot.com/");



 //Enable alert Handler
  page.on("dialog",(dialog)=>{
    console.log("Dialog type is",dialog.type());
    console.log("Dialog message is",dialog.message());


    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toBe("Harry Potter");
    //   dialog.accept();
    dialog.accept("Mukesh");

});
 await page.getByRole("button",{name:"Prompt Alert"}).click();

      let message: string | null = await page.locator("//p[@id='demo']").textContent();

    //   expect(message).toBe("You pressed OK!");

    expect(message).toContain("Hello Mukesh! How are you today?");
      console.log(message);


});