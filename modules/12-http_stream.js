const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        // const file = fs.readFileSync("./main_folder/big_file.txt", "utf8");
        // res.end(file);
        const fileStream = fs.createReadStream("./main_folder/big_file.txt");
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })
        fileStream.on('error', (err) => {
            console.log(err);
        })
    })
    .listen(5000);