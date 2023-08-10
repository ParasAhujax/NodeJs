const data = require('./0-module_export');
let name =data.name;
let age = data.age;
//all data exported from module is stored in object named 'data'

const add = require('./0.1-module_export');
add();
