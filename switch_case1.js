
let week_day = "wednesday";

switch(week_day){
    case("monday"): console.log(`today is monday,these are 5 day(s) until the weekend`);
    break;
    case("tuesday"): console.log(`today is tuesday,these are 4 day(s) until the weekend`);
    break;
    case("wednesday"): console.log(`today is wednesday,these are 3 day(s) until the weekend`);
    break;
    case("thursday"): console.log(`today is thursday,these are 2 day(s) until the weekend`);
    break;
    case("friday"): console.log(`today is friday,these are 1 day(s) until the weekend`);
    break;
    case("saturday"): console.log(`today is saturday,next day is the weekend`);
    break;
    case("sunday"): console.log(`today is sunday(weekend)`);
    break;
    default:console.log(`invalid days`);
}

// note:-- it also works like if else condition; 