import { expect } from "../../POMOrangeHRM/fixtures/fixtures";

const nums = [1, 2, 3, 4, 5];

nums.forEach((item)=>
{

    console.log(item);

});



const names = ["Sameer", "Rahul", "Ali"];

names.forEach((name, index) => {
    console.log(`${index} : ${name}`);
});

const bookings = [
    {
        firstname: "Sameer",
        lastname: "Shaik",
        password: "sameer123"
    },
    {
        firstname: "John",
        lastname: "Doe",
        password: "john123"
    },
    {
        firstname: "David",
        lastname: "Smith",
        password: "david123"
    }
];



bookings.forEach(({ firstname, lastname, password}) => {



    console.log(`First Name: ${firstname}, Last Name: ${lastname}, Password: ${password}`);




});
bookings.forEach((booking) => {
    console.log(`Firstname: ${booking.firstname}`);
    console.log(`Lastname: ${booking.lastname}`);
    console.log(`Password: ${booking.password}`);
});
bookings.forEach((booking) => {
    expect(booking.firstname).toBeTruthy();
    expect(booking.lastname).toBeTruthy();
    expect(booking.password).toBeTruthy();
});