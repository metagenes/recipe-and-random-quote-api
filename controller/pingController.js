const ping = (req, res) => {
    res.json({
        status:"OK",
        message: "Ping!",
        timestamp: new Date().toISOString()
    })
}
const pong = (req, res) => {
    res.json({
        status:"OK",
        message: "Pong!",
        timestamp: new Date().toISOString()
    })
}

module.exports = { ping,pong }