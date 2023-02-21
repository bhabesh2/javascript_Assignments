
//valid variable

let student_name = "Rahul";
let age = 12;
console.log(student_name)// OUT PUT = Rahul;
console.log(age) // OUT PUT = 12;

// invalid variable

let @name = "Rahul";
let 1age = 12;

console.log(@name); // syntaxError: invalid or unexpected token;
console.log(1age); /// syntaxError: invalid or unexpected token;

//note: we can't start variables with numbers or symbols it will be invalid. but there is a exception about $ and (_) symbol. but we can use numbers after a variable like below; but we still can't use symbols after a variable. 

let age1 = 12;