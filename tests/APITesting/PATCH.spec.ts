import { test, expect ,request} from '@playwright/test';


test("Patch request test", async ({ request }) => {
    


const auth=await request.post('/auth',{



        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })

    const authBody = await auth.json();
    
    const token=authBody.token;

    const curl=await request.patch('/booking/6059', {


        data:{
            "firstname" : "shaik",
            "lastname" : "sameer"
        },
        headers: {
            'Cookie': `token=${token}`
        }

        
    });
    const curlBody = await curl.json();
    console.log(curlBody);

    expect(curl.status()).toBe(200);
   

    const get=await request.get('/booking/6059', {
        headers: {
            'Cookie': `token=${token}`
        }
    });
    const getBody = await get.json();
    console.log(getBody);
    expect(get.status()).toBe(200);
    // expect(getBody.firstname).toBe("shaik");


});
