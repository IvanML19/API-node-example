'use strict'

const Product = require('./../models/product')

function getProduct(req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if (err) return res.status(500).send( { message: `Error al recuperar el producto: ${err}` } )
		if (!product) return res.status(404).send( { message: `El producto no existe` } )

		// res.status(200).send( { product: product })
		res.status(200).send( { product })
	})
}

function getProducts(req, res){
	Product.find({}, (err, products) => {
		if (err) return res.status(500).send( { message: `Error al recuperar el producto: ${err}` } )
		if (!products) return res.status(404).send( { message: `No existen productos` } )

		// res.status(200).send( { product: product })
		res.status(200).send( { products })
	})
}

function saveProduct (req, res) {
	console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if (err) {
			res.status(500).send( { message: `Error al guardar en la BD: ${err}` })
		}
		res.status(200).send({ product: productStored })
	})
}

function updateProduct(id){

}

function deleteProduct(id){

}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}