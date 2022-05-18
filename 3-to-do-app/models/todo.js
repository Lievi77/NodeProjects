//model to represent a todo

class Todo {
    id = '';
    desc = '';
    completedOn = null;

    constructor(desc) {
        this.desc = desc;
    }

}

module.exports = Todo;