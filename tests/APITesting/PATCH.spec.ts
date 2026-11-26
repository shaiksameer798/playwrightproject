import { test, expect } from '@playwright/test';

test('Patch request test', async ({ request }) => {
  // Generate token
  const auth = await request.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123',
    },
  });

  expect(auth.status()).toBe(200);

  const authBody = await auth.json();
  const token = authBody.token;

  console.log('Token:', token);

  // Update booking
  const patchResponse = await request.patch('/booking/6059', {
    data: {
      firstname: 'shaik',
      lastname: 'sameer',
    },
    headers: {
      Cookie: `token=${token}`,
    },
  });

  expect(patchResponse.status()).toBe(200);

  const patchBody = await patchResponse.json();
  console.log('PATCH Response:', patchBody);

  expect(patchBody.firstname).toBe('shaik');
  expect(patchBody.lastname).toBe('sameer');

  // Verify updated data
  const getResponse = await request.get('/booking/6059');

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();
  console.log('GET Response:', getBody);

  expect(getBody.firstname).toBe('shaik');
  expect(getBody.lastname).toBe('sameer');
});