const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
 res.write(JSON.stringify(req.headers))
 res.write(JSON.stringify(req.body))
 res.end()
})

app.post('/', (req, res) => {
 res.write(JSON.stringify(req.headers))
 res.write(JSON.stringify(req.body))
 res.end()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
