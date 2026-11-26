
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


    const ch='sameer56@*#';
    for(let i=0;i<ch.length;i++)
    {

        const y:number=ch.charCodeAt(i);


        if(y>=65&&y<=90)
        {
            console.log(`Uppercase letter found: ${ch[i]}`);
        }
        if(y>=97&&y<=122)
        {
            console.log(`Lowercase letter found: ${ch[i]}`);
        }
        else if(y>=48&&y<=57)
        {
            console.log(`Digit found: ${ch[i]}`);
        }
        else
        {
            console.log(`Non-alphabet character found: ${ch[i]}`);
        }
    }
    const value = "abc123";
console.log(/^[a-zA-Z0-9]+$/.test(value));


const ds:string="samreen68686565#$%^";

for(let i=0;i<ds.length;i++)
{
        if(/^[a-zA-Z]/.test(ds[i]))
        {
            console.log(`String contains only letters: ${ds[i]}`);
        }
        else if(/^[0-9]/.test(ds[i]))
        {
            console.log(`String contains only digits: ${ds[i]}`);
        }
        else
        {
            console.log(`String contains other characters: ${ds[i]}`);
        
        }
    }



    for(let i=0;i<ds.length;i++)
    {

        console.log(`char at index ${i} is ${ds.charAt(i)}`)
    }


});




