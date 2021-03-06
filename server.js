const express = require('express')
const path = require('path')
const app = express()
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})
