const file = fs.readFileSync("./main_folder/big_file.txt", "utf8");
        res.end(file);