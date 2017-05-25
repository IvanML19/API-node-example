'use strict'

// service se puede conocer tambien como helper/libraries

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken (user){
	const payload = { // no mucha info, solo básica
		sub: user._id, // no debería ser el mismo que el de la bbdd
		iat: moment().unix(), // creación del token // moment ahora
		exp: moment().add(14, 'days').unix(), // fecha de expiración
	}

	return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
	const decoded = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, config.SECRET_TOKEN)
			// checkeamos si es valido el token token caducado
			if (payload.exp <= moment().unix()) {
				reject({
					status: 401,
					message: 'El token ha expirado'
				})
			}
			resolve(payload.sub)
		} catch(err){
			reject({
				status: 500,
				message: 'Invalid token'
			})
		}
	})
	return decoded
}

module.exports= {
	createToken,
	decodeToken
}