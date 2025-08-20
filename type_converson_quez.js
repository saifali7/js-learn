//let x = 7
//let y = "7"

//  == ye loose equality hai 
//  ===  ye strict equality hai

/*

//console.log(x==y);  //true  (kyunki y=7 ek string hai to ye use number bna kar compare karega)

//console.log(x===y);  //false  (kyunki type alag hai ek nomber or ek string hai is liye false ayega)

//console.log(false==0); //true  (js me agar false ko number me convert kare to 0 banega)

//console.log(false===0); //false  (left side "false" boolian hai or right side 0 nomber hai dono ka type alag hai)

//console.log(null==undefined); //true  (js rule ke hisab se jab "null" or "undefined" ko compare kiya jata hai to wo equel mana jata hai (special case))

//console.log(null===undefined); // false  ("noll" ek object type hai jo "empty" ya "no value" dikhata hai or "undefined" ek primive value hai jo bata hai value assign nahi hui)

//console.log([]==0); // true  ([] (empty array) ko js pehle string banata hai  ""  fir string ko number bnata hai fir compare hota hai)

//console.log([]===0); // false  ([] object 0 number different type )

*/

/*

//JavaScript me objects/arrays ko compare karte waqt, hamesha reference check hota hai, value nahi.


//console.log([]==[]);  //false 

//console.log([1]===[1]); //false

//console.log([1]===[6]);  //false

//console.log([1]==[6]);  //false

//let a =[];
//let b = a;

// kyunki a or b same array ko refer kar rahe hai is liye dono true ayega 

//console.log(a==b); //true
//console.log(a===b);  //true



//Agar dono same memory location point karte hain tabhi true aata hai.

*/

/*

//console.log([1,2]=="1,2");  //true  //Jab == ka use hota hai aur ek side string ho, JS array ko string me convert kar deta hai.

//console.log([1,2]==="1,2");  //false

*/

/*

//console.log([]==""); //true

//console.log([]==0);  //true

*/

/*

//console.log([0]==0); //true  ([0] ko string me convet karega fir use number me convert karega is liye true ayega )

//console.log([0]=="");  //false  ([0] ko string me convert kare ab "0" == " " dono alag strings hai is liye false ayega)

*/

/*
//interview level Q
//console.log(0=="0"); //true  (== loose comparison hai type conversion karega "0" string ko number me convert karega is liye true ayega )
//console.log(0==="0");  //false  (=== strict compatison hai type conversion nahi karega left side number 0 or right side "0"
srting hai type alag hai)
*/

/*
console.log("0"==false); // true  (==loose comparison false ko dono ko number me convert karta hai)
console.log("0"===false);  false  (===srtict comparison hai left side String right side boolean types alag hai is liye false ayega)
 
*/

/*

Quick Recap of Boss Rules:

== → value compare + type conversion kar sakta hai

=== → value + type dono same hone chahiye

"0" == false → true

"0" === false → false

*/

/*

console.log(null==0); false (null sirf undefined ke equel hota hai kisi or ke nahi to false ayega)
console.log(null===0);  false  (===strict check null (object) = 0 (Number) is liye false)
console.log(undefined==0);  false  (==loose check karne par bhi undefined sirf null ke eqyel hota hai (Number) 0 ke nahi to false ayega)
console.log(undefined===0);  false  (type alag hai is liye false ayega)
console.log(null==undefined);  true  (sirf yahi ek case hai jo == me in dono ko equal treat karta hai (SPECIAL case hai)  )

*/

/*

console.log([]==false);  true ([] array ko convert karega String me fir Number me convert karega or false ko Number me me convert karega to true ayega )
console.log([]===false); false  (strict comparison hai false ayega )
console.log([0]==false);  true
console.log([0]===false);  false

*/































