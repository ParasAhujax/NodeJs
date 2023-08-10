const {readFile,writeFile, read} = require('fs');

console.log("starting the task...");
readFile('./main_folder/first_file.txt','utf8', (err,result) => {   
    if (err){
        console.log(err);           //async method to read file using callback function
        return
    }       
    const first_file = result;

    readFile('./main_folder/sub_folder/second_file.txt','utf8', (err,result) => {
        if (err){
            console.log(err);
            return
        }
        const second_file = result;

        writeFile('./main_folder/new_file.txt','this is an additional text'
        ,{flag:'a'}, (err,result) => {
            if (err){
                console.log(err);
                return
            }
            console.log("done with the task");
        })
    })
})
console.log("next task...");    
