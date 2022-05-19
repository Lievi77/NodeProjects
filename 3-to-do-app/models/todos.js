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

    listTodos() {

        console.log('');
        this.listArray.forEach((todo, i) => {
            const number = `${i + 1}.`.green;
            const { desc, completedOn } = todo; //object destructuring
            const status = completedOn == null ? "Pending".red : "Completed".green;

            console.log(`${(number + i).green} ${desc} :: ${status}`);
        })

    }

    listFilteredTodos(completed = true) {
        console.log();

        let number = 0;
        this.listArray.forEach(todo => {

            const { desc, completedOn } = todo; //object destructuring
            const status = completedOn == null ? "Pending".red : "Completed".green;

            if (completed && completedOn) {
                number += 1
                console.log(`${(number + '.').green} ${desc} :: ${completedOn}`);
            } else if (!completed && !completedOn) {
                number += 1
                console.log(`${(number + '.').green} ${desc} :: ${status}`);
            }

        });
    }

}

module.exports = Todos;