const axios = require('axios')
const { GoogleGenerativeAI } = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY)

const getRecipe = async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // get request ingredients
        const requestIngredients = req.body.ingredients
        // prepare prompt
        const prompt = `resep dengan bahan ${ requestIngredients }`

        // initiate response
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // UOB06@047000

        // return response
        res.json({
            status:"OK",
            data: text,
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

module.exports = { getRecipe }