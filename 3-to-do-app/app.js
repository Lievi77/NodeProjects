require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveData, readData } = require("./helpers/database_queries");
const Todo = require("./models/todo");
const Todos = require("./models/todos");

const main = async () => {

    let opt = '';
    const todos = new Todos();

    const todos_db = readData(); //array of todos


    if (todos_db) {
        //we have todos from the database
        todos.loadTodosFromArray(todos_db);
    }

    do {
        //print menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //create todos
                //request input via inquirer
                const desc = await readInput('Enter a description:');
                todos.createTodo(desc);
                break;

            case '2':
                //list all todos
                console.log(todos.listArray);
                break;
            default:
                break;
        }

        saveData(todos.listArray);

        //pause to prevent program continuation
        await pause();

    } while (opt !== '0');

}


main();