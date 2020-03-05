const fs = require('fs');
const path = require('path');

// Create a folder -- Check whether it exists first
if (!fs.existsSync(path.join(__dirname, 'created'))) {
    fs.mkdir(path.join(__dirname, 'created'), (err) => {
        if (err) {
            throw err;
        }

        console.log('Folder Created');
    });
}

// Create and write to file -- Flag 'w' may be redundant. The default flag is to overwrite
fs.writeFile(path.join(__dirname, 'created', 'hello.txt'), 'This is a test file created by FS.', {flag: 'w'}, (err) => {
    if (err) throw err;
    console.log('File successfully created and data written');
});

// Append to a file
fs.appendFile(path.join(__dirname, 'created', 'hello.txt'), ' This is appending to the file', (err) => {
    if (err) throw err;
    console.log('File successfully appended to and data written');
});

// Read File -- The encoding type is mandatory here otherwise it just returns the buffered data
fs.readFile(path.join(__dirname, 'created', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    if (data) {
        console.log(data);
    }
});

// Rename File/Folder
fs.rename(path.join(__dirname, 'created', 'hello.txt'), path.join(__dirname, 'created', 'helloRenamed.txt'), (err) => {
    if (err) throw err;
});