




import { test } from '@playwright/test';

test('log string', async () => {
  const str:String="madam";

   let f:String="";

  for(let i=str.length-1;i>=0;i--)
  {
   
        f=f+str.charAt(i);
  }
  console.log(str);
  console.log(f.trim());






   const strs:String="sameerm";

     const chars:String[]=strs.split('');

     


let right=chars.length-1;
     for(let i=0;i<chars.length/2;i++)
     {
        
        const temp=chars[i];
        chars[i]=chars[right];
        chars[right]=temp;
        right--;

 
     }
   

     const reversedString:String=chars.join('');
     console.log(`Reversed String: `+reversedString);


     if(str===reversedString)
     {
         console.log(`The string is a palindrome`);
     }
     else
     {
         console.log(`The string is not a palindrome`);


     }


     chars.reverse();
     console.log(`Reversed back: `+chars.join(''));
     
});



