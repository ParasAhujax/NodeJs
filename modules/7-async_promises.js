const { readFile, writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) =>
            err ? reject(err) : resolve(data)
        )
    })
};

const writeText = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, { flag: 'a' }, (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
}

getText("./modules/main_folder/first_file.txt")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

writeText("./modules/main_folder/new_file.txt", "this is an additional text ")
    .then()
    .catch((err) => console.log(err));


//There's also another way to make a promise
// we use util module's promisify function 

const util = require('util');

const getTextUtil = util.promisify(readFile);
const writeTextUtil = util.promisify(writeFile);

//There's another way to return a promise
//using async/await functions

const returnPromise = async() => {
    try {
        const result = await getTextUtil("./modules/main_folder/first_file.txt", "utf8");
        await writeTextUtil("./modules/main_folder/new_file.txt", "ollaaa como taalee taale wuu", { flag: 'a' });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
returnPromise();

/* these's one more way where we can even avoid using util module 

    we have to just add .promise after the require('fs) function 

    const { readFile, writeFile } = require('fs').promises;

    const returnPromise = async() => {
        try {
            const result = await readFile("./modules/main_folder/first_file.txt", "utf8");
            console.log(result);
            await writeFile("./modules/main_folder/new_file.txt", "ollaaa como taalee taale wuu", { flag: 'a' });
        } catch (err) {
            console.log(err);
        }
    }
    returnPromise();

    so we didn't had to use getTextUtil/writeTextUtil and instead used the standard 
    readFile/writeFile */