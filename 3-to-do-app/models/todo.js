//model to represent a todo
const { v4: uuidv4 } = require("uuid"); //rename v4 module as uuidv4


class Todo {

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completedOn = null;
    }

}

module.exports = Todo;