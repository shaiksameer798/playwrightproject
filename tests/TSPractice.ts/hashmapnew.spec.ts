import { test } from '@playwright/test';


test('hashmap example', async () => {



    const map=new Map<string, number>();
   


       let name='sameerrs';


       for(let char of name) {

        if(!map.has(char)) {
            
map.set(char, 1);
        }

        else{

            map.set(char,map.get(char)! + 1)
        }
      

       }
         console.log(map);



         for(let[ch,count] of map){

            if(count>1){
                console.log(`Duplicate character: ${ch}`);
            
            }

            
         }

         map.delete('s');
         console.log(map.size);
         console.log(map);
         map.clear();

         console.log(map);




         const hash=new Map<string, number>();

         const f=["apple", "banana", "apple", "mango"];



         for(let word  of f)
         {



            if(!hash.has(word)) {
                 hash.set(word, 1);
            }
            else{
                hash.set(word, hash.get(word)! + 1);
            }


        }

        console.log(hash);



        let maxCount = 0;
        let maxword="";
        for(let [word, count] of hash)

            {
                if(count>maxCount)
                {

                    maxCount = count;
                    maxword = word;
                }


            }
        console.log(`Most frequent word: ${maxword}, Count: ${maxCount}`);
   




        const ana="listen";


        const ana2="silent";
        const anaMap=new Map<string, number>();
        for(let char of ana) {
            if(!anaMap.has(char)) {
                anaMap.set(char, 1);
            }
            else{
                anaMap.set(char, anaMap.get(char)! + 1);
            }
        }
        console.log(anaMap); 

        
        const ana2Map=new Map<string, number>();
        for(let char of ana2) {
            if(!ana2Map.has(char)) {
                ana2Map.set(char, 1);
            }
            else{
                ana2Map.set(char, ana2Map.get(char)! + 1);
            }
        }
        console.log(ana2Map); 


for (const [char, count] of anaMap) {
    if (!ana2Map.has(char) || ana2Map.get(char)! !== count) {
        let isAnagram = false;
        break;
    }
}




const freq: number[] = new Array(26).fill(0);
const freq2: number[] = new Array(26).fill(0);


for (const ch of ana) {
    freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}

 for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
        const ch = String.fromCharCode(i + 'a'.charCodeAt(0));
        console.log(`${ch} -> ${freq[i]}`);
    }
}




console.log("Frequency of characters in ana:");

// ana2 frequency
for (const ch of ana2) {
    freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}
for (let i = 0; i < freq2.length; i++) {
    if (freq2[i] > 0) {
        const ch = String.fromCharCode(i + 'a'.charCodeAt(0));
        console.log(`${ch} -> ${freq2[i]}`);
    }
}

let isAnagram = true;

for (let i = 0; i < 26; i++) {
    if (freq[i] !== freq2[i]) {
        isAnagram = false;
        break;
    }
}

console.log(isAnagram ? "Anagram" : "Not Anagram");
   


let a=0;
let b=1;
const fib:number[]=[0,1];
  for(let i=0;i<10;i++)
  {

     let c=a+b;
     fib.push(c);
     console.log(c);
     a=b;
     b=c;
  }

    console.log(fib);



      const nums:number[]=[1,2,3,5];
      for(let i=1;i<nums.length;i++)
      {
          if(nums[i]-nums[i-1]!==1)
          {
            console.log(`Missing number between ${nums[i-1]} and ${nums[i]} is ${nums[i-1] + 1}`);
          }
      }




  const zro:number[]=[1,0,2,0,3];
   
  let c=0;
       const great:number[]=[];
       for(let i of zro)
       {

        if(i!==0){
            great.push(i);
            c++;
        }
       }


    for(let i=0;i<zro.length-c;i++)
    {
        great.push(0);
    }
       console.log(great);


   
       console.log("Two Sum");


       const arr = [1, 4, 2, 8];
const target = 10;
       const twosumMap=new Map<number, number>();

          twosumMap.set(0,0);



          let sum=0;

          for(let i=0;i<arr.length;i++)
          {

            sum=sum+arr[i];
    
            const complement = sum - target;
            if(twosumMap.has(complement))
            {
                
                console.log(`Two sum found: ${arr[i-1]} + ${arr[i]} = ${target}`);
                break;

            }
            twosumMap.set(sum,i);


          }

});