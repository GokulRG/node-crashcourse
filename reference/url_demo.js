const url = require('url');

const myUrl = new URL('https://www.google.com:8080/sample/path/hopeful?query=ben+stokes');

// Serialized url
console.log(myUrl.href); // Prints entire url. basically like printing the url
console.log(myUrl.toString()); // Same output

// Host (root domain)
console.log(myUrl.host); // Gives the host www.google.com in this case. This gives port information also

//Host name
console.log(myUrl.hostname); // Same as above, doesn't give port

// Pathname
console.log(myUrl.pathname); // Gives / for the above case. Gives the full path if it's not the root

// Serialized entry
console.log(myUrl.search); // Gives the search term or query string including ?

// Params Object
console.log(myUrl.searchParams); // URLSearchParams { 'query' => 'ben stokes' }

// Add param
myUrl.searchParams.append('length', '15'); // https://www.google.com:8080/sample/path/hopeful?query=ben+stokes&length=15
console.log(myUrl.toString());

// Loop Through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name} ---> ${value}`);
    
});
/*
query ---> ben stokes
length ---> 15
*/

