
import { test } from '@playwright/test';


test('remove duplicates from array', async () => {
  


const numbers = new Set<number>();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers);
    const numbersd = new Set<number>([1, 2, 3, 3, 4]);

console.log(numbersd);



console.log(numbers.has(10));


console.log(numbers.has(30));

    numbersd.delete(3);
    console.log(numbersd);
    console.log(numbersd.size);

    numbersd.clear();
    console.log(numbersd);


    const str=new Set<string>(['apple', 'banana', 'apple']);
    console.log(str);

    let sd:String[] = [];
    for(let i of str) {
        sd.push(i);
    }
    console.log(sd);


});




