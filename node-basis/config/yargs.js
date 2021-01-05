// we will write here the yargs import to simplify code 

//command options 
const opts = {
    base: { //the basis of our multiplicative table
        demand: true, //makes the argument required
        alias: 'b' //alias for simplification
    },
    limit: { //upper limit
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('list', 'Prints the table on screen', opts) //creates a command and displays its description when --help is called
    .command('create', 'Generates a .txt file containing the table', opts)
    .help() //must be called in order to display the description of each method
    .argv;

    //export command
module.exports = {
    argv
}