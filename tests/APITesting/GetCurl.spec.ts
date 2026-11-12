import { request, test, expect } from '@playwright/test';







let recontext2: any;
test.beforeAll(async () => {



recontext2 = await request.newContext({
    baseURL: 'https://restful-booker.herokuapp.com',

      extraHTTPHeaders: {
        Accept: 'application/json'
      }

});

});
test('Get Curl p1', async ({ request }) => {
  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking',
    {
      headers: {
        Accept: 'application/json'
      }
    }
  ); 


       

  expect(response.ok()).toBeTruthy();

  console.log(await response.json());
});

test('Get Curl p2', async ({ }) => {
  const reqContext = await request.newContext({
    baseURL: 'https://restful-booker.herokuapp.com',
    ignoreHTTPSErrors: true,

      extraHTTPHeaders: {
        Accept: 'application/json'
      }
  });

  const response = await reqContext.get('/booking');

  expect(response.ok()).toBeTruthy();

  console.log(await response.json());
});


test('Get Curl p3', async ({ }) => {
 
  const response3 = await recontext2.get('/booking');

  expect(response3.ok()).toBeTruthy();

  console.log(await response3.json());
});

test('Get Curl p4', async ({ request}) => {
 
  const response4 = await request.get('/booking');

  expect(response4.ok()).toBeTruthy();

  console.log(await response4.json());
});

test('Get Curl p5 Path Parameter ', async ({ request}) => {
 
  const response5 = await request.get('/booking/24');
console.log(response5.status());
console.log(await response5.text());


 await expect(response5.status()).toBe(200);
if(response5.status() === 404) {
  console.log('Booking not found');
}
else{

    console.log('Booking found');
    console.log(await response5.json());
}
 

  

});


test('Get Curl p6 Query Parameter ', async ({ request}) => {
 
  const response5 = await request.get('/booking', {

    headers: {
      Accept: 'application/json'
    },
    params: {
  firstname: 'Josh',
  lastname: 'Allen'
    }
  });
console.log(response5.status());
console.log(await response5.json());



});


test('Get Curl p7 Query Parameter ', async ({ request}) => {
 
  const response5 = await request.get('/booking', {

    headers: {
      Accept: 'application/json'
    },
    params: {
checkin: '2014-03-13',
checkout: '2014-05-21'
    }
  });
console.log(response5.status());
console.log(await response5.json());



});