require("colors");
//Options menu using inquirer

const inquirer = require("inquirer");

const questions = [
    {
        type: "list",
        name: "option",
        message: "What do you wish to do?",
        choices: [

            {
                value: "1",
                name: "1. Create a TO-DO"
            },
            {
                value: "2",
                name: "2. List TO-DOs"
            },
            {
                value: "3",
                name: "3. List completed TO-DOs"
            },
            {
                value: "4",
                name: "4. List pending TO-DOs"
            },
            {
                value: "5",
                name: "5. Complete a TO-DO(s)"
            },
            {
                value: "6",
                name: "6. Delete a TO-DO"
            },
            {
                value: "0",
                name: "0. Exit"
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();

    console.log('============================'.green);
    console.log("      Select an option:".green);
    console.log('============================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async () => {

    const question = [{
        type: "input",
        name: "enter",
        message: `Press ${'ENTER'.green} to continue.`
    }]

    console.log("\n");
    await inquirer.prompt(question);

}

module.exports = {
    inquirerMenu,
    pause
}