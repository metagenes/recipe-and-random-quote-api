const { GoogleGenerativeAI } = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY)
const successResponse = require('../responder/successResponse')
const errorResponse = require('../responder/errorResponse')

const getRecipe = async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // get request ingredients
        const requestIngredients = req.body.ingredients
        // prepare prompt
        const prompt = `resep dengan bahan ${ requestIngredients }`

        // initiate response
        const result = await model.generateContent(prompt);
        const response = result.response
        const text = response.text();

        res.json(successResponse(text, 'Get Recipe Success'))

    } catch (error) {
        console.error('this is error block', error)
        res.json(errorResponse(text, 'Please contact Administrator'),500)
    }
   
}

module.exports = { getRecipe }