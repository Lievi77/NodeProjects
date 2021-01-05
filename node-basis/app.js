//Author: Lev C. Guzman Aparicio
// email: levcguzman77@gmail.com

/*
* A simple app that let us display multiplicative tables 
*/


const argv = require('./config/yargs').argv; //handles CLI inputs way better
const colors = require('colors/safe'); //allows to display CLI text with colors

//an example of deconstruction, we only extract the methods we want
const { createFile, listTable } = require('./multiplication/multiply');

//argv is in the form of an object, the commands are located in argv[_] as an array.
// Example: ["create", "generate", ...] 
let command = argv._[0]; //we are only interested in the first argument


switch (command) {

    case 'list':
        //argument values are located in argv[argument_name]
        //usage: node app list --base=5 --limit=20
        listTable(argv.base, argv.limit);
        break;

    case 'create':
        createFile(argv.base, argv.limit) // returns a promise, followup with a .then
            .then(file => console.log(`File Created: `, colors.green(file)))
            .catch(e => console.log(e));
        break;

    default: //executes if everything else fails
        console.log('Unsupported command');

}