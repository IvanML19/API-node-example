'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const ProductCtrl = require('./controllers/product')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded( {extended: false} ))
app.use(bodyParser.json())

app.get('/api/product', ProductCtrl.getProducts(req, res))

app.get('/api/product/:productId', (req, res))

app.post('/api/product', (req, res) => {
	
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})


mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
	if (err) {
		return console.log(`Error al conectar a la BD: ${err}`)
	}
	console.log(`Conexión con DB establecida`)

	app.listen(port, () => {
		console.log(`Servidor corriendo en http://localhost:${port}`)
	})
})


// cap 10