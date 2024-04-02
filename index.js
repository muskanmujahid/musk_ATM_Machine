#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4567;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let balance1 = myBalance - amountAns.amount;
            console.log(`Your remaining balance is ${balance1}`);
        }
        else {
            console.log(`You have insufficient balance`);
        }
    }
    else if (operationAns.operation === `fast cash`) {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                types: "list",
                choices: ["1000", "3000", "5000", "10000", "15000"],
            }
        ]);
        if (fastCashAns.amount <= myBalance) {
            let balance2 = myBalance - fastCashAns.amount;
            console.log(`Your remaining balance is ${balance2}`);
        }
        else {
            console.log(`You have insuffitient amount`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}
