'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

console.log(config)

mongoose.connect(config.db, (err, res) => {
	if (err) {
		return console.log(`Error al conectar a la BD: ${err}`)
	}
	console.log(`Conexión con DB establecida`)

	app.listen(config.port, () => {
		console.log(`Servidor corriendo en http://localhost:${config.port}`)
	})
})


// cap 10