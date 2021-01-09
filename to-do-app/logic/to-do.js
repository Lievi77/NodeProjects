//fs stands for File System
const fs = require("fs");

let listToDos = [];

/*
Creates a new to-do task with a description
@param description The description of the task
*/
const create = (description) => {
  let todo = {
    description,
    completed: false, //default value of a new todo is always false
  };
  listToDos.push(todo);

  saveToDB();

  //return todo to signalized that the task was completed successfully
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

module.exports = {
  create,
};
