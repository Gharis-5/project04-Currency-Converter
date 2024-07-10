import inquirer from "inquirer"

const currency:any = {
    USD : 1,
    GBP : 0.91,
    EUR : 0.76,
    INR : 74.57,
    PKR : 280,
}

let user_input = await inquirer.prompt([
   {
    name:"for",
    type:"list",
    message:"Enter for Currency",
    choices:["USD","GBP","INR","PKR","EUR"]
   },
   { 
    name:"to",
    type:"list",
    message:"Enter to Currency",
    choices:["USD","GBP","INR","PKR","EUR"]
   },
   {
    name:"amount",
    type:"input",
    message:"Enter Your Amount"
   }
])

let forAmount = currency[user_input.from];
let toAmount = currency[user_input.to];
let amount = user_input.amount;
let baseCurrency = amount / forAmount
let covertedAmount = baseCurrency * toAmount
console.log(covertedAmount);


