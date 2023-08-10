const path = require('path');
console.log(path.sep);  //returns the path separator

const filepath = path.join(__dirname,'./main_folder','./sub_folder','./file.txt');
console.log(filepath);
//return the path of the current directory

const absolutePath = path.resolve('./main_folder','./sub_folder','./file.txt');
console.log(absolutePath);
//returns the current open dir with provided path
