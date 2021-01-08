//This file defines the commands for our to-do app

//we define the options of each command first
const createOpts = {
  description: {
    alias: "d",
    demand: true,
    //description of the command description
    desc: "Displays to-do's description",
  },
};

const listOpts = {};

const updtOpts = {
  description: {
    alias: "d",
    demand: true,
    //description of the command description
    desc: "Displays to-do's description",
  },
  completed: {
    alias: "c",
    default: true, //default value of the command
    desc: "Value of the the to-do's completed status",
  },
};

const argv = require("yargs")
  .command("create", "Creates a new to-do", createOpts)
  .command("update", "Updates a to-do's status", updtOpts)
  .command("list", "Lists all to-dos", listOpts)
  .help().argv;

//exporting the command using an object strategy
module.exports = {
  argv,
};
