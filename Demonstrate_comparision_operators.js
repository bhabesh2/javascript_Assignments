
// Equal

let num = 3;
let num1 = 4;

console.log(num == num1);// false;

let num2 = 3;
let num3 = 3;

console.log(num2 != num3);// false;
console.log(num2 == num3);// true;

let num4 = 4;
let num5 = 5;

console.log(num4 != num5);// true;

// triple equal to (it used to look for variables are strictly same or not; in this case both the comparing values should be same and also its datatypes)

let num6 = 12;
let num7 = 10;

console.log(num6 !== num7);// false;(data types are same)
console.log(num6 === num7);// false;(values && datatype should be match);

let num8 = 12;
let num9 = 12;

console.log(num8 !== num9);// false;
console.log(num8 === num9);// true;(values and datatype are strictly match);

// greater than or lesser than

let int = 12;
let int1 = 13;

console.log(int>int1);// false; 
console.log(int<int1)// true;

// grater or lesser than equal to

let int2 = 12
let int3 = 12

console.log(int2<=int3);// true;
console.log(int2>=int3);// true;(both the values are equal but not greater or lesser so one condition is true so result will be true.)








