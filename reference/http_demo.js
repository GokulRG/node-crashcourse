const http = require('http');

// Create a server object
http.createServer((request, response) => {
    // Write response
    response.write('Hello World');
    response.end();
}).listen(5000, () => console.log('Server is running on port 5000'));