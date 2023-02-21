
// values and data types.

// string:--- is everything that we write in between the "double quotation marks" or 'single quotation marks' it is a data type. 

let string = "how are you";  //what we have write in between the double quotation marks that is value of the (string) variable. 
let str  = "123"; // this is seems to be number but we write this in between the double quotation marks so it becomes string now.


// Number:-- this is a data type in javascript. we simply write or assigned a number to a variable.

let num = 123; //this (num) variable has been assigned with 123 which is the value of the num variable.


// BigInt:-- is also a data type we use it for big numeric values to see the exact result. let's see.

let bigNum = 100000000000000000000000;
let nxtBigNum = 100000000000;
// if we multiply or add these numbers then we can see the result would be very huge and it would be eula's no . if i need the exact value then we need to use BigInt here.

let  value = 10000n // shows its type is BigInt.

// boolean:--- this is a data type which used to show a value or condition is true or false. basically computer works on true and false statement. 

if (2>3){
    console.log(true);
}
else{
    console.log(false);
}

// undefined:-- it is a data type which means nothing is defined by the user and it is a default value which computer used to display us if there is nothing to show or nothing found as a value of a particular variable. 

let myName; // here i am not defining my name as a value to its (myName) variable so in this case computer will show me undefined if i console.log(myName).

// null:-- null is assigned by the user if there is nothing to assign to a variable we simply assign that variable's value as null. it means for now its null but it can be re-assigned to with real values.

let father_name = null; // it means currently there is no name to be assigned to this variable.

// symbol:-- is a data type and it is a unique identifier and it comes under primitive data structure.it is used to make values unique

let word = Symbol("my symbol");
let word2 = Symbol("my symbol");
console.log(typeof(word)) // when i check its data type it shows me symbol.
console.log(word==word2) // it gives me false although i have used same values but it gives false. because after adding symbol here the values that has been assigned becomes unique it doesn't matter whether it's same or not.

// objects:--- in Javas script everything is a object. in simple dictionary meaning Object means a thing, item so here if we write some elements within an Array also considered as object. but also we have particular object method here. 

let array = ["raul","priya",'bhabesh'] // in this array we write some name as we can understand as a human being but for the computer these are objects of that (array) variable.

let obj = {name:"rahul",name:"priya",name:"bhabesh"};// we also declare obj like this this is specially called obj method. Now we can do some operation with these data with in obj variable. within obj method there is two this one is called key and next is value. name is key and rahul is the value. that why it is called key:value pair. 