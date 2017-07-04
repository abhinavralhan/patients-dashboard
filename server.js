const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const api = require('./routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

app.use('/',api)

const port = process.env.PORT || '9999'
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => console.log(`API running on localhost:${port}`))



