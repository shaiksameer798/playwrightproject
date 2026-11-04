import {
    test, expect,
    Page
}
from '@playwright/test';
   


test.beforeAll("Before all", async()=>
{
   console.log(" Before all step");
});
 test.afterAll("After all", async()=>
 {
    console.log(" After all step");
 });

 test.beforeEach("Before each",async()=>
 {

   console.log(" Before each step");
 });
 test('test 1', async ({  }) => {
 


    console.log('test1');
});


test('test2', async ({  }) => {
 


    console.log('test2');
});

test('test 3', async ({  }) => {


    console.log('test3');
});


test.afterEach("After each", async()=>
{
   console.log(" After each step");
});




