import {
    test, expect,
    Page
}
from '@playwright/test';


test("Verify the label text and others",async({page})=>{

let map=new Map<String,number>();


     map.set("one",1);
     map.set("two",2);
     map.set("three",3);
     console.log(map);

     console.log(map.get("one"));

     console.log(map.has("two"));

     map.delete("three");

        console.log(map);
        console.log(map.size);


        for(let key of map.keys())
        {

            console.log(key + " " + map.get(key));
            
        }



        for(let h of map.values())
        {
            console.log(h);
        }
});






