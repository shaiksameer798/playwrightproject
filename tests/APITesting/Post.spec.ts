import { test, expect ,request} from '@playwright/test';


test("Post request test", async ({ request }) => {
    

    const curl=await request.post('/booking', {


        data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

      

        
        
    });
    expect(curl.status()).toBe(200);
    expect(await curl.json()).toBeTruthy();
    console.log(await curl.statusText());
    console.log(await curl.status());
    console.log(await curl.json());

    expect(await curl.json()).toHaveProperty('bookingid');

    expect((await curl.json()).booking).toMatchObject({
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        }
        // additionalneeds: "Breakfast"
    });

    expect((await curl.json()).booking.additionalneeds).toBe("Breakfast");


});