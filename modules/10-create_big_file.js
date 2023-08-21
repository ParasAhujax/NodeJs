const { writeFileSync } = require('fs')
for (let i = 0; i < 100000; i++) {
    writeFileSync('./main_folder/big_file.txt', `hello worlf ${i}\n`, { flag: 'a' })
}