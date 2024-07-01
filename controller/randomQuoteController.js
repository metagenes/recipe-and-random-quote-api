const axios = require('axios')

const getData = async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/quotes');
        const apiData = response.data

        const randomIndex = Math.floor(Math.random() * apiData.quotes.length);
        const randomQuote = apiData.quotes[randomIndex];

        // return response
        res.json({
            status:"OK",
            data: `${randomQuote.quote} - ${randomQuote.author}`,
            timestamp: new Date().toISOString()
        })

    } catch (error) {
        console.error('this is error block', error)
        res.json({
            status:"ERROR",
            data: null,
            timestamp: new Date().toISOString()
        })

    }
   
}

module.exports = { getData }