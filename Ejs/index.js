import express from 'express'
const app = express()
const port = 3000

/*
app.get('/', (req, res) => {
  const today = new Date()
  const day = today.getDay()

  let type = 'a weekday'
  let adv = 'its time to work harder'
  if (day === 0 || day === 6) {
    type = 'the weekend'
    adv = 'its time to have some  fun'
  }
  res.render('index.ejs', {
    dayType: type,
    advice: adv,
  })
})*/

app.get('/', (req, res) => {
  const data = {
    title: '',
    seconds: '',
    items: '',
  }
})

app.listen(port, () => {
  console.log(`server is running at ${port}`)
})
