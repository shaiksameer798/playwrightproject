


import { test } from './fixtres';

import { Booking } from './models';
import { PatchBooking } from './Patch';

test("Create booking", async ({ request , bookingAPI,tokensed , bookingId}) => {


    console.log(tokensed);

   const  res=await bookingAPI.createBooking(2);
       
      
    console.log(await res.json());



    const bookingdata: Booking =

{
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



    
    const postRes = await bookingAPI.createBookingWithBody(bookingdata);

    console.log(await postRes.json());

    const updateRes: Booking ={ 
    
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

    const updateResponse = await bookingAPI.updateBooking(updateRes,3, tokensed);
    console.log("Update Response:");
    console.log(await updateResponse.json());




  const patch: PatchBooking = {
            "firstname" : "shaik",
            "lastname" : "sameer"
        }
        const patchResponse = await bookingAPI.patch(3, patch, tokensed);
        console.log("Patch Response:");
        console.log(await patchResponse.json());



  

});