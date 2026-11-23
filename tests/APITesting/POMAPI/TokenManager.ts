

import dotenv from 'dotenv';
dotenv.config();

import BaseAPIReq from './BaseAPIReq';
export default class TokenManager extends BaseAPIReq

{

    async token()
    {

const auth=await this.request.post('https://restful-booker.herokuapp.com/auth',
  {
    data: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  }
    )
console.log(process.env.BASE_URL);

    const authBody = await auth.json();
    
    const token=authBody.token;
    return token;

    }



}
