//fs stands for File System
const fs = require("fs");

let listToDos = [];

/*
Creates a new to-do task with a description
@param description The description of the task
*/
const create = (description) => {
  loadDb();

  let todo = {
    description,
    completed: false, //default value of a new todo is always false
  };
  listToDos.push(todo);

  saveToDB();

  //return to-do to signalize that the task was created successfully
  return todo;
};

/*
Saves tasks in listToDos to our database located at ./database/database.json
*/
const saveToDB = () => {
  let data = JSON.stringify(listToDos); //parses data to a valid JSON

  fs.writeFile("database/data.json", data, (err) => {
    if (err) throw new Error("Failed to write to database", err);
  }); //writes the file
};

/*
Reads our db 
*/
const loadDb = () => {
  try {
    listToDos = require("../database/data.json"); //automatically parses the JSON for us
  } catch (error) {
    listToDos = []; //file is empty case
  }

  //debug
  //console.log("loaded successfully:", listToDos);
};

module.exports = {
  create,
};
