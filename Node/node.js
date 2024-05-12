// node => an asynchronous event-driven javascript runtime ,  node js  is designed to build scalable network applications

const fs = require('fs')
fs.writeFile('message.txt', (err) => {
  if (err) throw err
  console.log('file is created')
})
