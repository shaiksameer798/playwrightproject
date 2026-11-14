import { test, expect } from '@playwright/test';

test("Ping health check test", async ({ request }) => {

    const res = await request.get('/ping');

    // The API documents 201 Created for a healthy server.
    expect(res.status()).toBe(201);
    expect(res.statusText()).toBe('Created');

    // The body is plain text ("Created"), not JSON.
    expect(await res.text()).toBe('Created');
});
