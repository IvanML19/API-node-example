'use strict'

const services = require('../services')

function isAuth(req, res, next) { // next pasa la funcionalidad al ctrldr final
	if(!req.headers.authorization) return res.status(403).send({ message: 'No tienes autorización' })

	const token = req.headers.authorization.split(" ")[1] // el segundo[1] elemento del array tendrá el token

	const payload = jwt.decode(token, config.SECRET_TOKEN)

	services.decodeToken(token)
		.then(response => {
			req.user = response
			next()
		})
		.catch(response => {
			res.status(response.status)
		})
}

module.exports = isAuth