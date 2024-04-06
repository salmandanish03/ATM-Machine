import inquirer from "inquirer";
let mybalance = 9000;
let mypin = 9999;
let pinanswer = await inquirer.prompt({
    name: "atm",
    message: "enter pin number",
    type: "number",
});
if (pinanswer.atm === mypin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select one option",
            type: "list",
            choices: ["withdraw Cash", "check Available balance", "10,000", "5,000", "1000", "500"]
        }
    ]);
    // console.log(operationAns);
    if (operationAns.operation === 9000 && operationAns.operation <= 8999, "withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        mybalance -= amountAns.amount;
        console.log("Your remaining balance is : " + mybalance);
    }
    else if (operationAns.operation === "check Available balance") {
        console.log("Your remaining balance is : " + mybalance);
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
