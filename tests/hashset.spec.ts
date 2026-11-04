import {
    test, expect,
    Page
}
from '@playwright/test';



test ("Verify the hashset",async({page})=>{


let set=new Set<String>();

set.add("one");
set.add("two");
set.add("three");




console.log(set);
console.log(set.has("two"));

console.log(set.size);

set.delete("three");

console.log(set);

});