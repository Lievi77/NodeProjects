require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Todo = require("./models/todo");
const Todos = require("./models/todos");

const main = async () => {

    let opt = '';
    const todos = new Todos();

    do {
        //print menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //create task
                //request input via require
                const desc = await readInput('Enter a description:');
                todos.createTodo(desc);
                break;

            case '2':
                console.log(todos.listArray);
                break;
            default:
                break;
        }

        await pause();

    } while (opt !== '0');

}


main();