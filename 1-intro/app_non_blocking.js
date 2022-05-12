const { getUser } = require("./users/users.js");

console.log("Begin");
console.time("begin");

getUser(1, (user) => {
    console.log("User 1:", user);
})


getUser(2, (user) => {
    console.log("User 2:", user);
    console.timeEnd("begin");
})

console.log("End");
