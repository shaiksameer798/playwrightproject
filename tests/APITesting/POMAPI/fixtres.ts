import { test as base } from "@playwright/test";
import BookingAPI from "./BookingAPI";
import TokenManager from "./TokenManager";
import { Booking } from "./models";
type BookingAPIFixture = {
  bookingAPI: BookingAPI;
  tokensed: string;
    bookingId: number;

};


export const test = base.extend<BookingAPIFixture>({
  bookingAPI: async ({ request }, use) => {
    const bookingAPI = new BookingAPI(request);
    await use(bookingAPI);
  },

  tokensed: async ({ request }, use) => {
    const tokenManager = new TokenManager(request);
    const token = await tokenManager.token();

    await use(token);
  },

  bookingId: 
    async ({ bookingAPI }, use) =>
    {
      const bookingdata = {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      };

      const response =
        await bookingAPI.createBookingWithBody(
          bookingdata
        );

      const bookingId =
        (await response.json()).bookingid;

      await use(bookingId);
    }
});