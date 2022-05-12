
const my_function = (id, callback) => {

    const user = {
        id,
        name: "Random"

    }

    setTimeout(() => {
        callback(user)
    }, 1000);

}

my_function(99, ({ id, name }) => {
    console.log(id, name);
})
