const successResponse = require('../responder/successResponse')

const ping = (req, res) => {
    res.json(successResponse(null, 'Ping!'))
}
const pong = (req, res) => {
    res.json(successResponse(null, 'Pong!'))
}

module.exports = { ping,pong }