
import {test,request,expect} from '@playwright/test';

test("Bearer Token Authentication", async ({ request }) => {


    const loginRes=await request.post('https://dummyjson.com/auth/login',{



        data:{


           username: "emilys",
            password: "emilyspass"

        }
    });


    console.log(await loginRes.json());
    expect(loginRes.status()).toBe(200);


    const loginBody=await loginRes.json();
    const token=loginBody.accessToken;
    console.log(token);




    const profile=await request.get('https://dummyjson.com/auth/me',{
        
        

            headers: {


                Authorization:`Bearer ${token}`
            }
        }
    );

    console.log(await profile.json());
    expect(profile.status()).toBe(200);
    
const body=await profile.json();
expect(body.username).toBe("emilys");
expect(body.email).toBe("emily.johnson@x.dummyjson.com");

expect(body.firstName).toBe("Emily");

});