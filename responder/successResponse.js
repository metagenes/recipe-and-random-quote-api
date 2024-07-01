module.exports = (data, message = '') => {
    return {
        status: "OK",
        message: message,
        data: data,
        timestamp: new Date().toISOString()
    }
}