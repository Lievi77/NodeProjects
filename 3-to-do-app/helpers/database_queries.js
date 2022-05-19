const fs = require('fs'); // filesystem

const file = './database/data.json' //database path is assumed to be fixed

const saveData = (data) => {

    fs.writeFileSync(file, JSON.stringify(data));

}

const readData = () => {

    if (!fs.existsSync(file)) {
        return null; // file does not exist
    }

    const info = fs.readFileSync(file, { encoding: "utf-8" }); //read file sync returns bytes by default

    const data = JSON.parse(info);

    return data;
}

module.exports = { saveData, readData }; 