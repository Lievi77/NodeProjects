const { getUserSync } = require("./users/users.js");

console.log("Begin");
console.time("begin");

const usuario1 = getUserSync(1);
console.log("Usuario 1:", usuario1);

const usuario2 = getUserSync(2);
console.log("Usuario 2:", usuario2);

console.log("End");
console.timeEnd("begin");
