//This file defines the commands for our to-do app

//we define the options of each command first, note that list does not have any opts
const createOpts = {
  description: {
    alias: "d",
    demand: true,
    //description of the command description
    desc: "To-do's description",
  },
};

const updtOpts = {
  description: {
    alias: "d",
    demand: true,
    //description of the command description
    desc: "To-do's description to update",
  },
  completed: {
    alias: "c",
    default: true, //default value of the command
    desc: "New To-do's completed status",
  },
};

const deleteOpts = {
  description: {
    alias: "d",
    demand: true,
    desc: "To-do's description to delet",
  },
};

/*
Defining the commands using yargs. Valid commands will be:

create -d my_description
update -d my_description -c true/false

*/
const argv = require("yargs")
  .command("create", "Creates a new to-do", createOpts)
  .command("update", "Updates a to-do's status", updtOpts)
  .command("list", "Lists all to-dos")
  .command("delete", "Deletes a task", deleteOpts)
  .help().argv;

//exporting the command using an object strategy
module.exports = {
  argv,
};
