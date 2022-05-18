//class that helps us model a collection of todos

const Todo = require("./todo");


/**
 * List idea:
 * {
 * <uuid>  : <todo-object>
 * }
 */

class Todos {
    //we do not need to declare instance variables beforehand

    constructor() {
        this._list = {}; //need to use this. when defining and referencing instance variables
    }

    createTodo(desc = '') {
        const todo = new Todo(desc);

        this._list[todo.id] = todo;

    }

}

module.exports = Todos;