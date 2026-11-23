import{
    test, expect, request
} from '@playwright/test';

test("Validate API test", async ({ request }) => {


    const res= await request.get('/booking/12');


const headres=await res.headers();

console.log(headres);


expect(headres['content-type']).toEqual('application/json; charset=utf-8');

expect(headres['server']).toEqual('Heroku');


console.log("''''''''");

  const hearray=res.headersArray();
  console.log(hearray);


  expect(hearray[1].name).toEqual('Content-Type');




  expect(hearray.length).toEqual(10);



  hearray.forEach((item)=>{



    console.log(item.name+" :: "+item.value);

  });


});

