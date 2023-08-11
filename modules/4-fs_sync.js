const fs = require('fs');

const first_file = fs.readFileSync('./main_folder/first_file.txt','utf8');
const second_file = fs.readFileSync('./main_folder/sub_folder/second_file.txt','utf8');

console.log(first_file, second_file);

/*there's an alternate method to import fs module
    const {readFileSync,writeFileSync} = require('fs');

    const first_file = readFileSync('./main_folder/first_file.txt','utf8');
    const second_file = readFileSync('./main_folder/sub_folder/second_file.txt','utf8');

this method only imports the functions we are going to use/need

NOTE: we didn't had to use fs.readFileSync to read the file */

fs.writeFileSync('./main_folder/new_file.txt'
,`${first_file} & ${second_file} aye haloo `,{flag:'a'});

const new_file = fs.readFileSync('./main_folder/new_file.txt','utf8');
console.log(new_file);

//{flag:'a'} appends and not rewrite the file

//we could do same for writeFileSync as we did for readFileSync earlier


