// node => an asynchronous event-driven javascript runtime ,  node js  is designed to build scalable network applications

// create file
const fs = require('fs')
fs.writeFile('message.txt', 'hello node js', (err) => {
  if (err) throw err
  console.log('file is created')
})

// read file

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err
  console.log(data)
})
