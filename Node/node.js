// node => an asynchronous event-driven javascript runtime ,  node js  is designed to build scalable network applications

/**
* * create file
const fs = require('fs')
fs.writeFile('message.txt', 'hello node js', (err) => {
  if (err) throw err
  console.log('file is created')
})

* * read file
* * in case of string buffer is created - resolve => utf8
fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(`show the data : ${data}`)
})

* ********    using npm package **********
* *   sillyname package
const generateName = require('sillyname')
const sillyname = generateName()
console.log(sillyname)


**/
