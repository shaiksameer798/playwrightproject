

import { Booking } from './models';

import { PatchBooking } from './Patch';

import BaseAPIReq from './BaseAPIReq';
export default class BookingAPI extends BaseAPIReq
{
   
     async createBooking(bookingId:number)
     {


     const body=await this.request.get('/booking/' + bookingId, {

            


                headers:{

                     Accept: 'application/json',
      'Content-Type': 'application/json'


                
            }
 } );

  return body;
     }




     async createBookingWithBody(body: Booking)
     {

         const curl=await this.request.post('/booking', {


            data: body

         });


     return curl;
     }



     async updateBooking( body: Booking, bookingId:number, token:string)
     {


        const curl=await this.request.put('/booking/'+ bookingId, {

            data:body,
            headers:{
              
                'Cookie': `token=${token}`

            }




        });
        return curl;
     }

     async  patch(bookingId:number, body: PatchBooking, token:string)
     {

        const curl = await this.request.patch('/booking/' + bookingId, {


        data: body,
        headers: {
            'Cookie': `token=${token}`
        }

        
    });



     return curl;
     }



}