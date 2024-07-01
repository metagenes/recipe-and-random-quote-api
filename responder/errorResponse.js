module.exports = (data, message = '') => {
    return {
        status: "ERROR",
        message: message,
        data: null,
        timestamp: new Date().toISOString()
    }
}