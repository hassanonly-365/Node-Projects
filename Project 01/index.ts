import inquirer from "inquirer";
import chalk from 'chalk';

type anstype ={
  userGuess: number
}

const generatedNo= Math.floor(Math.random()*20);


let answer : anstype = await inquirer.prompt([
  {
    type : "number",
    name : "userGuess",
    message :"Write your Guess:"
  }
])

let {userGuess} = answer;

console.log("UserGuess:",userGuess,);
console.log("Generated No:",generatedNo);


if(userGuess === generatedNo){
  console.log((chalk.blueBright("You Guessed the Correct Number.\nYou Won")));
}
else{
  console.log(chalk.redBright(chalk.bgBlack("Better Luck next time!")));
}


