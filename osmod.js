const os = require("os");
const chalk = require('chalk');
const validator = require("validator");



console.log(chalk.blue('Hello world!'));
const res = validator.isEmail("Arun@purohitcom");
console.log(res);

