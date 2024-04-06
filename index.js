#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            message: "What you want to add in your todos?",
            type: "input",
            name: "todo",
        },
        {
            message: "Do you want to add more?",
            type: "confirm",
            name: "addMore",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
