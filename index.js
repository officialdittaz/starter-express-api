const express = require('express')
const app = express()
app.all('/', (req, res) => {
  let html = fs.readFileSync('./index.html', 'utf-8')
  res.end(html)
})
app.listen(process.env.PORT || 3000)
