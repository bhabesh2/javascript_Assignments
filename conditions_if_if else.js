
//conditions if else if

//example--1

if(12>13){
    console.log(true);// this condition is false so don't execute this condition;
}
else{
    console.log(false);// false; 12 is lesser than 13
}
// ------
if(14>13){
    console.log(true);// true; 14 is greater than 13;
}
else{
    console.log(false);//this condition will not execute;
}

//example--2

if(12>=12){
    console.log(true);//true; 12 is equal to 12;
}
else{
    console.log(false);// this condition will not executed.
}
// -------
if(13>=14){
    console.log(true);//this condition is false so don't execute;
}
else{
    console.log(false);//false; 13 is not greater or equal to 14;
}

// example--3

let traffic_light = "green";

if(traffic_light == 'red'){
    console.log('stop')
}
else if(traffic_light == 'orange'){
    console.log("get-ready");
}
else if(traffic_light == 'green'){
    console.log("go");
}
else{
    console.log("input_wrong");
}

// in this case as per the light show the correct instruction. if light is green then show the output what to do here it indicates to go so people will cross the road.


// note:-- in if else condition always starts from if condition. while if condition is false then compiler go to the else condition and will show the result.


