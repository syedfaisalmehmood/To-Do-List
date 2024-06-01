#! /usr/bin/env node

import inquirer from "inquirer";

//todos array =
//todos function =
//todos operations =

let todos: string[] = ["Bilal", "Faisal", "Hamza", "Umer", "Huzaifa"];

async function createToDo(todos: string[]) {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      message: "Select your Desired Option",
      name: "select",
      choices: ["Add", "Update", "View", "Delete", "Exit"],
    });

    if (ans.select == "Add") {
      let addToDo = await inquirer.prompt({
        type: "input",
        message: "Add Item..",
        name: "todo",
      });
      todos.push(addToDo.todo);
      console.log(todos);
    }

    if (ans.select == "Update") {
      let UpdateToDo = await inquirer.prompt({
        type: "list",
        message: "Select your desired Item for update",
        name: "todo",
        choices: todos.map((item) => item),
      });

      let addToDo = await inquirer.prompt({
        type: "input",
        message: "Add Item..",
        name: "todo",
      });

      let newToDOs = todos.filter((val) => val !== UpdateToDo.todo);
      todos = [...newToDOs, addToDo.todo];
      console.log(todos);
    }

    if (ans.select == "View") {
      console.log(todos);
    }

    if (ans.select == "Delete") {
      let deleteToDo = await inquirer.prompt({
        type: "list",
        message: "Select your desired Item for Delete",
        name: "todo",
        choices: todos.map((item) => item),
      });
      let newToDOs = todos.filter((val) => val !== deleteToDo.todo);
      todos = [...newToDOs];
      console.log(todos);
    } else if (ans.select == "Exit") {
      console.log("Thank You for using our ToDo List Project.");
      process.exit();
    }
  } while (true);
}

createToDo(todos);
