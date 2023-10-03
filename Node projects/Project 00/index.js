import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        type: "number",
        name: "numberOne",
        message: chalk.blue("Kindly enter your first number:")
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.cyan("Kindly enter your Second number:")
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "-", "/", "+"],
        message: (chalk.rgb(128, 0, 128)("Select operator:"))
    }
]);
let result = answer;
let { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log(chalk.bgBlack(chalk.green(`Your result is ${result}`)));
}
else {
    console.log(chalk.red("Kindly enter valid input."));
}
