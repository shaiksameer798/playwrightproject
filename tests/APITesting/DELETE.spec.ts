import { test, expect } from '@playwright/test';
import APIJson from './apidata.json';

test("Delete request test", async ({ request }) => {

    const auth = await request.post('/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        }
    });
    expect(auth.status()).toBe(200);

    const token = (await auth.json()).token;

    // Create a booking first so the test always has a real id to delete,
    // instead of relying on a hardcoded id that may not exist on the server.
    const created = await request.post('/booking', {
        data: APIJson.postcall
    });
    expect(created.status()).toBe(200);

    const bookingId = (await created.json()).bookingid;

    const req = await request.delete(`/booking/${bookingId}`, {
        headers: {
            'Cookie': `token=${token}`
        }
    });

    console.log(await req.text());
    expect(req.status()).toBe(201);

    const get = await request.get(`/booking/${bookingId}`);
    expect(get.status()).toBe(404);

    // The booking endpoint returns a plain text "Not Found" body (not JSON)
    // when the booking id doesn't exist, so use text() instead of json().
    console.log(await get.text());
});
