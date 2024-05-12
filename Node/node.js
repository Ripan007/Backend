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
* * superheroes package
import superheroes from 'superheroes'
import { randomSuperhero } from 'superheroes'
const random = randomSuperhero()
console.log(random)

const me = superheroes[0]
console.log(` i am ${me}`)

* *********** QR code generator *************

**/

import inquirer from 'inquirer'

inquirer
  .prompt([
    {},
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
