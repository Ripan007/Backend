// node => an asynchronous event-driven javascript runtime ,  node js  is designed to build scalable network applications

const fs = require('fs')
fs.writeFile('message.txt', 'work done  with nodejs', (err) => {
  if (err) throw err
  console.log('file has beewn added')
})

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err
  console.log(data)
})
