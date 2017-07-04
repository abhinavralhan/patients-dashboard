const express = require('express')
const router = express.Router()
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()


router.post('/', (req, res) => {
	console.log('api works')
	res.send(req.params)
})

router.post('/login', (req,res) => {
	res.send('log in here.....')
	console.log('log in here.....')
})

router.post('/editinfo', (req,res) => {
	console.log('editing user info')
	res.send('editing user info.....')
})

router.post('/adduser', (req,res) => {
	res.send('adding user.....')
	console.log('adding user....')
})

module.exports = router
