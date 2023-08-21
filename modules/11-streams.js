const { error } = require('console');
const { createReadStream } = require('fs');

//read the data in chunks that makes the process faster
//default size of the chunks is 64kb

const stream = createReadStream("./main_folder/big_file.txt", {
    highWaterMark: 1024 //it changes the default size of chunk to 1024
        //encoding: "utf8" could be added
});

stream.on("data", (data) => {
    console.log(data, data.length);
})

stream.on("error", () => {
    console.log(error);
})