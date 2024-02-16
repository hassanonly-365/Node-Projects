import inquirer from "inquirer";
import chalk from 'chalk';
import { log } from "console";
import { todo } from "node:test";


let todos : string[] = [];
let loop = true

while(loop){
    let answer :{
        TODO : string,
        addmore : boolean
    } = await inquirer.prompt([
        {
            type : "input",
            name : "TODO",
            message: "TODO list"
        },
        {
            type :"confirm",
            name: "AddMore",
            message :"Do u want to add more?",
            default : true
        }
    ])
    const {TODO,addmore} =answer;
    console.log(answer);
    loop = addmore
    if(TODO){
        todos.push(TODO)
    }else{
        console.log(chalk.redBright("Kindly add valid input"));
    }
}

// console.log(todos);
if(todos.length>0){
    console.log(chalk.blue("Your todo list:"));
    todos.forEach(todo => {
         console.log(todo);
         
    });
}
else{
    console.log(chalk.redBright("No TODOS found"));
}

