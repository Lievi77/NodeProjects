//Yargs command config for our climate app

const generalOpts = {
  location: {
    alias: "l",
    desc:
      "The location where you want to retrieve the current wheather/climate",
    demand: true,
  },
};

const argv = require("yargs").options(generalOpts).argv; //in this app, we do not use an intermediate command, therefore we directly pass the options

module.exports = {
  argv,
};
