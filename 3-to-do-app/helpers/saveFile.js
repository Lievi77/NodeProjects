const fs = require('fs'); // filesystem

const saveData = (data) => {

    const file = './database/data.json'

    fs.writeFileSync(file, JSON.stringify(data));

}


module.exports = { saveData }; 