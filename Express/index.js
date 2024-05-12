/**
 * * node + express => benefit > 1.readibility 2.less code 3.middleware
 * * creating express server
 *
 *
 *
 *  **/

import express from 'express'
const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
