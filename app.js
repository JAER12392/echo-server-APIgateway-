const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

app.use(bodyParser.json())

app.get('/', (req, res) => {
 res.send(JSON.stringify(req.headers))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
