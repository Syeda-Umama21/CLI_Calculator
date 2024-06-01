#! /usr/bin/env node 

import chalk from "chalk";
import inquirer from "inquirer";

//user input  through inquirer

const answers = await inquirer.prompt([
  { message: chalk.green.bold("please Enter first number"), type: "number", name: "num1" },
  { message: chalk.magenta.bold("please Enter second number"), type: "number", name: "num2" },
  {
    name: "operator",
    type: "list",
    message: chalk.yellow.bold("please select the operator"),
    choices: ["+","-","*","/","**","%"],
  },
]);
//variable declaration

let number1:number = answers.num1;
let number2:number = answers.num2;
let opt:string = answers.operator

// Conditional statement if-Else

if (answers.operator === "+") {
    console.log(chalk.rgb(0, 255, 255).bold(`${number1} ${opt} ${number2} = ${number1 + number2}`));
}
  else if (answers.operator === "-") {
    console.log(chalk.rgb(204, 255, 153).bold(`${number1} ${opt} ${number2} = ${number1 - number2}`));
}
  else if (answers.operator === "*") {
    console.log(chalk.rgb(128, 255, 0).bold(`${number1} ${opt} ${number2} = ${number1 * number2}`));
}
else if (answers.operator === "/") {
  console.log(chalk.rgb(255, 178, 102).bold(`${number1} ${opt} ${number2} = ${number1 / number2}`));
}
else if (answers.operator === "**") {
  console.log(chalk.rgb(219, 182, 229).bold(`${number1} ${opt} ${number2} = ${number1 ** number2}`));
}
else if (answers.operator === "%") {
  console.log(chalk.rgb(204, 245, 215).bold(`${number1} ${opt} ${number2} = ${number1 % number2}`));
}       
else {
    console.log(chalk.red.bold("please select valid operator"));
}
