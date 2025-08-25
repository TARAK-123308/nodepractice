let prompt = require("prompt-sync")();
let month=prompt("Enter the name of Month : ");
switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "octomber":
    case "december":
    console.log(`${month}` + "contains 31 days ");
    break;
    case "april":
    case "june":
    case "september":
    case "novemer":
    console.log(`${month}`+ "contains 30 Days");
    break;
    case "febuary":
        console.log(`${month}`+ " contains 28b days");
    default :
        console.log("Please enter a valid month name! 😊");
}
