// Author: Lev C. Guzman Aparicio
// A basic to-do-app
// email: lguzm038@uottawa.ca

//Required packages
const argv = require("./config/yargs").argv;
const colors = require("colors");
const toDos = require("./logic/to-do"); //to-dos logic (create/update) functions

//for debug purposes
//console.log("yargs debug =", argv);

let command = argv._[0]; //command retrieval

//helper method to help us print a listing
const printListing = (list) => {
  for (let task of list) {
    console.log("=======TO-DO==========".green);
    console.log(task.description);
    console.log("Completed Status:", task.completed);
    console.log("======================".green);
  }
};
/////////////////////////////////////////

//switch to determine the command introduced by the user. list, create, update
switch (command) {
  case "list":
    let list = toDos.getListing();
    printListing(list);
    break;
  case "create":
    let task = toDos.create(argv.description);
    console.log(task);
    break;
  case "update":
    console.log("Update a to-do");
    break;
  default:
    console.log("Unrecognized command");
    break;
}
