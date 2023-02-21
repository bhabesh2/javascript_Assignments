
//1. string 

let name = "my name";
console.log(typeof name);// type -- string;

//2. integer

let num = 12;
console.log(typeof num);//type -- number;

//3. floating value

let num1 = 12.3;
console.log(typeof num1)// type -- number;

//4. infinity

let num2 = Number.POSITIVE_INFINITY;
console.log(typeof num2) // type -- number;

//5. Not a number(NaN);

let num3 = NaN;
console.log(num3) //type -- NaN;

//6. BigInt

let num4 = 1024n; // type -- bigint;
console.log(typeof num4)

//7. boolean (true||false);

let value = true;
console.log(typeof value) // type -- boolean.

//8. undefined

let myName;
console.log(typeof myName);//type -- undefined;

//9. null 

let car = null;
console.log(typeof car);//type -- object;

//10. symbol

let sym = Symbol("my symbol");
console.log(typeof sym);//type -- symbol;

//11. Objects

let array = [1,2,"pw skills"];
console.log(typeof array);//type -- object;

let obj = {name:"Rahul",age:12, marks:320};
console.log(typeof obj);//type -- object; 

// note we can check data type of any variable by writing typeof in javascript. 