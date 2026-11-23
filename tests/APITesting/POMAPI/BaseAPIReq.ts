import { APIRequestContext } from '@playwright/test';



export default class BaseAPIReq 
    {

       protected request: APIRequestContext;
        constructor(request: APIRequestContext)
        {
            this.request = request;
        }




    }


