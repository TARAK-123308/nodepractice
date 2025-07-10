// leap year greatest of three numbers switch case examples

let prompt = require("prompt-sync")();
let c="cantains 31 Days";
let v="contains 30 days"
let month=prompt("Enter the name of Month : ");
switch(month){
    case "january":
        console.log(`${month}`+ c);
        break;
    case "febuary":
        console.log(" febuary contains 28 days");
        break;
    case "march":
        console.log(`${month}`+ c);
        break;
    case "april":
        console.log(`${month}` + v);
        break;
    case "may":
        console.log(`${month}` + c);
        break;
    case "june":
        console.log(`${month}` + v);
        break;
    case "july":
        console.log(`${month}` + c);
        break;
    case "august":
        console.log(`${month}` + c);
        break;
    case "september":
        console.log(`${month}`+ v);
        break;
    case "octomber":
        console.log(`${month}`+ c);
        break;
    case "November":
        console.log(`${month}` + v);
        break;
    case "december":
        console.log(`${month}` + c);
        break;
    default :
        console.log("Please enter a valid month name! 😊");
}