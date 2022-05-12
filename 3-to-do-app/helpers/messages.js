require("colors");

const showMenu = () => {

    //cannot return an error
    //Use of promises to handle an infinite loop
    return new Promise((resolve) => {
        console.clear();

        console.log('============================'.green);
        console.log("      Select an option:".green);
        console.log('============================\n'.green);

        console.log(`${'1.'.green} Create a TO-DO `);
        console.log(`${'2.'.green} List TO-DOs `);
        console.log(`${'3.'.green} List completed TO-DOs`);
        console.log(`${'4.'.green} List pending TO-DOs`);
        console.log(`${'5.'.green} Complete a TO-DO(s)`);
        console.log(`${'6.'.green} Delete a TO-DO`);
        console.log(`${'0.'.green} Exit\n`);

        //Interface creation
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //prompt user question
        readline.question(`Select an option: `, (opt) => {
            readline.close();
            resolve(opt);
        });
    });


}

const pause = () => {

    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });


        readline.question(`\nPress ${'ENTER'.green} to continue.\n`, () => {
            readline.close();
            resolve();
        });
    });

}

module.exports = {
    showMenu,
    pause
};