//fs stands for File System
const fs = require("fs");

let listToDos = [];

const create = (description) => {
  let todo = {
    description,
    completed: false, //default value of a new todo is always false
  };
  listToDos.push(todo);

  //return todo to signalized that the task was completed successfully
  return todo;
};

module.exports = {
  create,
};
