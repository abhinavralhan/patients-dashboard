const express = require('express')
const router = express.Router()
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

router.use(express.static(path.join(__dirname, 'public')))

router.get('/editinfo', (req,res) => {
	res.render('details')
})

router.get('/adduser', (req,res) => {
	res.render('details')
})
