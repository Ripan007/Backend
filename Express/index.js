/**
 * * node + express => benefit > 1.readibility 2.less code 3.middleware
 * * creating express server
 * * Request vocab: get ,post ,put,patch,delete
 import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('<h1> home page<h1/>')
})
app.post('/register', (req, res) => {
  res.sendStatus(201)
})
app.put('/user/rahul', (req, res) => {
  res.sendStatus(200)
})
app.patch('/user/rahul', (req, res) => {
  res.sendStatus(200)
})
app.delete('/user/rahul', (req, res) => {
  res.sendStatus(200)
})
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

 **/

import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.url({ extended: true }))
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/submit', (req, res) => {})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
