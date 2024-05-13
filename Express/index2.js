import express from 'express'
const app = express()
const port = 3000
function logger(req, res, next) {
  console.log('requested method:', req.method)
  console.log('requested url:', req.url)
}
app.use(logger)
app.get('/', (req, res) => {
  res.send('hello')
})
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
