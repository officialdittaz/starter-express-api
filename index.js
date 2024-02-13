const express = require('express')
const fs = require('fs-extra')
const app = express()
app.all('/', (req, res) => {
  let html = fs.readFileSync('./index.html', 'utf-8')
  res.end(html)
})
app.listen(process.env.PORT || 3000)
