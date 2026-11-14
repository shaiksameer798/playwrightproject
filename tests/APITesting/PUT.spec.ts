import { test, expect ,request} from '@playwright/test';


test("Post request test", async ({ request }) => {
    





    const auth=await request.post('/auth',{



        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })

    const authBody = await auth.json();
    
    const token=authBody.token;

    const curl=await request.put('/booking/1', {


        data:{
    "firstname" : "James",
    "lastname" : "Browns",
    "totalprice" : 116,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
,
        headers: {

        

            'Cookie': `token=${token}`
        }

    });
    const rebody=await curl.json();
    console.log(rebody);
    expect(curl.status()).toBe(200);
    expect(rebody.firstname).toBe('James');
    expect(rebody.lastname).toBe('Browns');
    expect(rebody.totalprice).toBe(116);
    expect(rebody.depositpaid).toBe(true);
    expect(rebody.bookingdates.checkin).toBe('2018-01-01');
    expect(rebody.bookingdates.checkout).toBe('2019-01-01');
    expect(rebody.additionalneeds).toBe('Breakfast');



    const get=await request.get('/booking/1', {
        headers: {
            'Cookie': `token=${token}`
        }
    });
    const getBody = await get.json();
    console.log(getBody);
    expect(getBody.firstname).toBe('James');
    expect(getBody.lastname).toBe('Browns');
    expect(getBody.totalprice).toBe(116);
    expect(getBody.depositpaid).toBe(true);
    expect(getBody.bookingdates.checkin).toBe('2018-01-01');
    expect(getBody.bookingdates.checkout).toBe('2019-01-01');
    expect(getBody.additionalneeds).toBe('Breakfast');
    
    

});