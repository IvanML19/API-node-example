'use strict'

const express = require('express')

const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')

const api = express.Router()

const auth = require('../middlewares/auth')

api.get('/product', productCtrl.getProducts )
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct) 
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signUp)


// pruebas con middleware 
// metemos el middleware antes demandar la repsuesta
api.get('/private', auth, function(req, res) {
	res.status(200).send( { message: 'Tienes acceso' })
})



module.exports = api

// cap 17