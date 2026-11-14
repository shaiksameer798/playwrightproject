import { test, expect ,request} from '@playwright/test';


import APIJson from './apidata.json';
test("Post request test", async ({ request }) => {
    

    const curl=await request.post('/booking', {


        data: APIJson.postcall

      

        
        
    });
    expect(curl.status()).toBe(200);
    expect(await curl.json()).toBeTruthy();
    console.log(await curl.statusText());
    console.log(await curl.status());
    console.log(await curl.json());

    expect(await curl.json()).toHaveProperty('bookingid');

    expect((await curl.json()).booking).toMatchObject({
        ...APIJson.postcall
       
    });

    expect((await curl.json()).booking.additionalneeds).toBe(APIJson.postcall.additionalneeds);


});




test("Put request test", async ({ request }) => {
    





    const auth=await request.post('/auth',{



        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })

    const authBody = await auth.json();
    
    const token=authBody.token;

    const created=await request.post('/booking', { data: APIJson.postcall });
    expect(created.status()).toBe(200);
    const bookingId=(await created.json()).bookingid;

    const curl=await request.put(`/booking/${bookingId}`, {


        data: APIJson.Putcall,

        headers: {

        

            'Cookie': `token=${token}`
        }

    });
    const rebody=await curl.json();
    console.log(rebody);
    expect(curl.status()).toBe(200);
    expect(rebody.firstname).toBe(APIJson.Putcall.firstname);
    expect(rebody.lastname).toBe(APIJson.Putcall.lastname);
    expect(rebody.totalprice).toBe(APIJson.Putcall.totalprice);
    expect(rebody.depositpaid).toBe(APIJson.Putcall.depositpaid);
    expect(rebody.bookingdates.checkin).toBe(APIJson.Putcall.bookingdates.checkin);
    expect(rebody.bookingdates.checkout).toBe(APIJson.Putcall.bookingdates.checkout);
    expect(rebody.additionalneeds).toBe(APIJson.Putcall.additionalneeds);



    const get=await request.get(`/booking/${bookingId}`, {
        headers: {
            'Cookie': `token=${token}`
        }
    });
    const getBody = await get.json();
    console.log(getBody);
    expect(getBody.firstname).toBe(APIJson.Putcall.firstname);
    expect(getBody.lastname).toBe(APIJson.Putcall.lastname);
    expect(getBody.totalprice).toBe(APIJson.Putcall.totalprice);
    expect(getBody.depositpaid).toBe(APIJson.Putcall.depositpaid);
    expect(getBody.bookingdates.checkin).toBe(APIJson.Putcall.bookingdates.checkin);
    expect(getBody.bookingdates.checkout).toBe(APIJson.Putcall.bookingdates.checkout);
    expect(getBody.additionalneeds).toBe(APIJson.Putcall.additionalneeds);
    
    

});