// Bhai route.fulfill() mein response ko bahut tarike se modify kar sakte ho. Interview mein agar pooche "What kind of response mocking have you done?" toh ye examples kaafi strong hain.

// 1. Modify Specific Field

// Original:

// JSON
// {
// "role": "Admin"
// }

// Modify:

// TypeScript
// body.role = "User";

// Use Case:

// Role-based access testing
// 2. Modify Multiple Fields
// TypeScript
// body.firstname = "Sameer";
// body.lastname = "Shaik";
// body.depositpaid = false;

// Use Case:

// Different customer profiles
// 3. Return Empty Array
// TypeScript
// body.products = [];

// Use Case:

// No Data Found scenario
// 4. Return Single Record
// TypeScript
// body.products = body.products.slice(0,1);

// Use Case:

// Verify UI with minimum data
// 5. Return Partial Data
// TypeScript
// body.products = body.products.slice(0,3);

// Use Case:

// Pagination / limited records
// 6. Add New Record
// TypeScript
// body.products.push({
// id: 999,
// title: "Mock Product"
// });

// Use Case:

// New product testing
// 7. Remove Record
// TypeScript
// body.products.pop();

// or

// TypeScript
// body.products.splice(2,1);

// Use Case:

// Product removal scenarios
// 8. Remove Entire Property

// Original:

// JSON
// {
// "firstname":"John",
// "lastname":"Doe"
// }
// TypeScript
// delete body.lastname;

// Use Case:

// Missing field validation
// 9. Add New Property
// TypeScript
// body.vipCustomer = true;

// Use Case:

// New feature testing
// 10. Change Data Type
// TypeScript
// body.price = "1000";

// instead of:

// JSON
// {
// "price":1000
// }

// Use Case:

// Invalid data testing
// 11. Change Status Code

// Success to Error:

// TypeScript
// await route.fulfill({
// status: 500,
// body: JSON.stringify({
// message: "Internal Server Error"
// })
// });

// Use Case:

// Server Failure Scenario
// 12. Mock 401 Unauthorized
// TypeScript
// await route.fulfill({
// status: 401,
// body: JSON.stringify({
// message: "Unauthorized"
// })
// });

// Use Case:

// Authorization testing
// 13. Mock 403 Forbidden
// TypeScript
// await route.fulfill({
// status: 403,
// body: JSON.stringify({
// message: "Access Denied"
// })
// });

// Use Case:

// Permission testing
// 14. Mock 404
// TypeScript
// await route.fulfill({
// status: 404,
// body: JSON.stringify({
// message: "Not Found"
// })
// });

// Use Case:

// Missing resource testing
// 15. Mock Custom Headers
// TypeScript
// await route.fulfill({
// status: 200,
// headers: {
// "x-test": "playwright"
// },
// body: JSON.stringify(body)
// });

// Use Case:

// Header validation
// 16. Mock Completely Custom Response
// TypeScript
// await route.fulfill({
// contentType: "application/json",
// body: JSON.stringify({
// id: 1,
// name: "Sameer",
// city: "Hyderabad"
// })
// });

// Use Case:

// Backend unavailable
// Frontend testing only
// 17. Null Values
// TypeScript
// body.firstname = null;

// Use Case:

// Null handling validation
// 18. Large Data
// TypeScript
// for(let i=0;i<1000;i++){
// body.products.push({
// id:i
// });
// }

// Use Case:

// Performance/UI rendering
// Most Common Real Project Scenarios

// ✅ Empty Data
//  ✅ Partial Data
//  ✅ Additional Data
//  ✅ Missing Fields
//  ✅ Invalid Data Types
//  ✅ 401 Unauthorized
//  ✅ 403 Forbidden
//  ✅ 404 Not Found
//  ✅ 500 Internal Server Error
//  ✅ Role Change (Admin/User)
//  ✅ Feature Flags On/Off
//  ✅ Custom Headers

// Interview Answer

// Using route.fetch() and route.fulfill(), I can modify API responses in different ways such as changing field values, removing or adding properties, returning empty datasets, simulating authorization failures (401/403), resource-not-found errors (404), server errors (500), role-based responses, and custom business scenarios. This helps validate UI behavior without depending on backend changes. ✅