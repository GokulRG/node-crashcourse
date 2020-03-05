const os = require('os');

// Platform / OS
console.log(os.platform()); //darwin

// CPU Architecture
console.log(os.arch()); // x64

// CPU Core Info
console.log(os.cpus()); // Displays core count, processor make and model etc etc

// Free Memory
console.log(os.freemem()); // Lists available memory

// Total Memory
console.log(os.totalmem()); // Lists total memory

// Home Directory
console.log(os.homedir()); // /Users/gokulrama on Mac

// Uptime
console.log(os.uptime()); // Displays the time for which the computer has been up/running


