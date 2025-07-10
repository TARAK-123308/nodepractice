let prompt = require("prompt-sync")();
let cakePrice =25;
let burgerPrize = 30;
let cokePrice = 10;
let friesPrice = 15;
let noodlesPrice = 20;

let cakeQunntity = prompt(" Enter the number of cakes you want to order: ");
let burgerQuantity = prompt(" Enter the number of burgers you want to order: ");
let cokeQuantity = prompt(" Enter the number of cokes you want to order: ");
let friesQuantity = prompt(" Enter the number of fries you want to order: ");
let noodlesQuantity = prompt(" Enter the number of noodles you want to order: ");   

let total = (cakePrice * cakeQunntity) + (burgerPrize * burgerQuantity) + (cokePrice * cokeQuantity) + (friesPrice * friesQuantity) + (noodlesPrice * noodlesQuantity);
if(total > 1000) {
    total = total - (total * 0.1); 
}
else if (total > 500) {
    total = total - (total * 0.05);
}

console.log("Total amount to be paid is: " + total);