// practice task
// build a simple node.js program to read and write a file
// 1. Create a file reader/writer
const fs = require('fs');

// Write to a file
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// Read from the file
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content: ', data);
});

// 2. Add error handling
