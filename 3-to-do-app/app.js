require("colors");
const { inquirerMenu, pause } = require("./helpers/inquirer");

const main = async () => {

    let opt = '';

    do {

        opt = await inquirerMenu();
        console.log({ opt });

        await pause();

    } while (opt !== '0');

}


main();