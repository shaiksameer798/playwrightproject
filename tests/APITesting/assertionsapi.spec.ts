import { request, test, expect } from '@playwright/test';



test('Get Curl p5 Path Parameter ', async ({ request}) => {
 
  const response5 = await request.get('/booking/24');
console.log(response5.status());




const responseBody = await response5.json();

    console.log( response5.statusText());


    console.log(await response5.url());

    console.log(await response5.headers());
  



    expect(response5.statusText()).toBe('OK');
  expect(response5).toBeOK();


     

//     expect(responseBody).toMatchObject({
//       firstname: 'Jim',
//   lastname: 'Brown',
//   totalprice: 111,
//   depositpaid: true,
//   bookingdates: {
//     checkin: '2018-01-01',
//     checkout: '2019-01-01'
//   },
//         additionalneeds: 'Breakfast'
//     });

     expect(responseBody).toHaveProperty('firstname');
     expect(responseBody).toHaveProperty('lastname');
     expect(responseBody).toHaveProperty('totalprice', 111);
     expect(responseBody).toHaveProperty('depositpaid', true);
     expect(responseBody).toHaveProperty('bookingdates');
     expect(responseBody).toHaveProperty('additionalneeds');
     expect(responseBody.bookingdates).toHaveProperty('checkin');
     expect(responseBody.bookingdates).toHaveProperty('checkout');

     expect(responseBody).toHaveProperty('bookingdates');
    

 await expect(response5.status()).toBe(200);
if(response5.status() === 404) {
  console.log('Booking not found');
}
else{

    console.log('Booking found');
    console.log(await response5.json());
}
 

  


});



test('Ui and API', async ({ request}) => {



     const response = await request.get('https://api.demoblaze.com/entries');
     console.log(response.status());


     const rbody=await response.json();
     console.log(rbody);

    
     console.log(rbody.Items[0].title);
     console.log(rbody.Items[0]);

     console.log(rbody.Items.length);

     console.log(rbody.Items[0].id);

    
     const ids:number[]=[];
  for(let item of rbody.Items)
  {
       console.log(item.title);
      console.log(item.id);
      ids.push(item.id);
  }
  let s:String[]=[];
  for(let item of rbody.Items)
  {
      s.push(item.title);
  

  }
   expect(rbody.Items.length).toBeGreaterThan(0);


        expect(rbody.Items[0]).toHaveProperty('title');
        expect(rbody.Items[0]).toHaveProperty('id');


        console.log(ids);
        console.log(s);

});