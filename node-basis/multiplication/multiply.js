//here we contain the logic of the program


// requirements
const fs = require('fs'); //lets us write a file
const colors = require('colors');

//displays the table on screen without saving it on a .txt file
let listTable = (base, limit = 10) => {
//note that the default limit value is 10 
    console.log('=================='.green);
    console.log(`Multiplication Table of ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}

//generates a file with the multiplicative table
let createFile  = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`The value \"${ base }\" is not a number`);
            //resolve/reject DO NOT halt the program execution.
            //if you wish to halt, you must type a return statement
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //writes a new file under the 'output' folder
        fs.writeFile(`output/table-${ base }-to-${ limite }.txt`, data, (err) => {

            //here we handle the errors for a smooth execution
            if (err)
                reject(err)
            else
                resolve(`table-${ base }-to-${ limite }.txt`);

        });

    });

}

module.exports = {
    createFile,
    listTable
}