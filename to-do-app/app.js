// Author: Lev C. Guzman Aparicio
// A basic to-do-app
// email: lguzm038@uottawa.ca

//yargs
const argv = require("./config/yargs").argv;

//to-do create function
const toDos = require("./logic/to-do");

//for debug purposes
console.log("yargs debug =", argv);

let command = argv._[0];

//switch to determine the command introduced by the user
switch (command) {
  /* The supported commands are "list", "create", update
   */
  case "list":
    console.log("List all to-dos");
    break;
  case "create":
    //console.log("Create a new to-do");
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
