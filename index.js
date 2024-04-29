import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 9981;
let pinAns = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "enter your pin number",
});
if (pinAns.pin === myPin) {
    console.log("Your pin is correct");
    let operateAns = await inquirer.prompt([
        {
            name: "account",
            type: "list",
            message: "please select the account type",
            choices: ["Current", "Savings"],
        },
        {
            name: "operate",
            type: "list",
            message: "please select the method",
            choices: ["Withdraw", "Balance Inquiry"],
        },
    ]);
    if (operateAns.operate === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else {
        // myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("Your pin is incorrect");
}
