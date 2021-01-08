// Author: Lev C. Guzman Aparicio
// A basic to-do-app
// email: lguzm038@uottawa.ca

const argv = require("yargs").argv;

//for debug purposes
console.log(argv);

let command = argv._[0];

//switch to determine the command introduced by the user
switch (command) {
  /* The supported commands are "list", "create", update
   */
  case "list":
    console.log("List all to-dos");
    break;
  case "create":
    console.log("Create a new to-do");
    break;
  case "update":
    console.log("Update a to-do");
    break;

  default:
    console.log("Unrecognized command");
    break;
}
