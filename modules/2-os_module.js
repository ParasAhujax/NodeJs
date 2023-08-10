const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`uptime is ${os.uptime}`);  //returns for how long the os is running

const currentOs = { 
    name:os.type()
}