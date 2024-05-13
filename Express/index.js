/**
 * * node + express => benefit > 1.readibility 2.less code 3.middleware
 * * creating express server
 * * Request vocab: get ,post ,put,patch,delete
 *
 *
 *  **/

import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('<h1> home page<h1/>')
})
app.post('/register/rahul', (req, res) => {
  res.sendStatus(201)
})
app.put('/register/rahul', (req, res) => {
  res.sendStatus(200)
})
app.patch('/register/rahul', (req, res) => {
  res.sendStatus(200)
})
app.delete('/register/rahul', (req, res) => {
  res.sendStatus(200)
})
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
