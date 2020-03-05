const path = require('path');

// Filename
console.log(__filename); // Gives us the full path of the current file

// Basename
console.log(path.basename(__filename)); // Gets the filename with the extension

// Directory name
console.log(__dirname); // Directory name, one level up -- shows full path of the directory
console.log(path.dirname(__filename)); // Same as above

// File Extension
console.log(path.extname(__filename)); // prints .js

// Create path object
console.log(path.parse(__filename)); 
/*
{ root: '/',
  dir: '/Users/gokulrama/node-crashcourse/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo' }
*/

// Concatenate paths
console.log(path.join(__dirname, 'test','hello.html')); // Finds appropriate delimiter to represents path and joins them accordingly
// /Users/gokulrama/node-crashcourse/reference/test/hello.html


