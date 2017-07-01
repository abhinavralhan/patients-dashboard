const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const api = require('./server/models/api')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//tester
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req,res){
	res.render('index')
}) 

app.use('/',api)
app.use(app.router);
api.initialize(app);

const port = process.env.PORT || '9999'
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => console.log(`API running on localhost:${port}`))



