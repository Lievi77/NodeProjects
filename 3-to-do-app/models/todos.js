//class that helps us model a collection of todos

const Todo = require("./todo");


/**
 * List idea:
 * {
 * <uuid>  : <todo-object>
 * }
 * 
 * However, a list is needed to display the tasks to the user
 */

class Todos {
    //we do not need to declare instance variables beforehand

    constructor() {
        this._list = {}; //need to use this. when defining and referencing instance variables
    }

    loadTodosFromArray(todos = []) {

        todos.forEach(todo => {
            this._list[todo.id] = todo;
        });

    }

    createTodo(desc = '') {
        const todo = new Todo(desc);

        this._list[todo.id] = todo;

    }

    //getter
    get listArray() {

        const array = []

        Object.keys(this._list).forEach(key => {
            array.push(this._list[key]);
        });

        return array;
    }

}

module.exports = Todos;