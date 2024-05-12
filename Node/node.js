// node => an asynchronous event-driven javascript runtime ,  node js  is designed to build scalable network applications

const fs = require('fs')
fs.writeFile('message.txt', 'work done  with nodejs', (err) => {
  if (err) throw err
  console.log('file has beewn added')
})

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

// what  i want  to achieve for that i have to work for  it => thats the  only way to become what i want =>  there will be  no other way ,other than that
