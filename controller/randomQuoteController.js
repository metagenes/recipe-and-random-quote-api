const axios = require('axios')
const successResponse = require('../responder/successResponse')
const errorResponse = require('../responder/errorResponse')

const getData = async (req, res) => {
    try {
        const response = await axios.get(process.env.QUOTE_URL);
        const apiData = response.data

        const randomIndex = Math.floor(Math.random() * apiData.quotes.length);
        const randomQuote = apiData.quotes[randomIndex];

        // return response
        res.json(successResponse(`${randomQuote.quote} - ${randomQuote.author}`, 'Get Random Quotes Success'))
    } catch (error) {
        console.error('this is error block', error)
        res.json(errorResponse(null, 'Please contact Administrator'),500)
    }
   
}

module.exports = { getData }