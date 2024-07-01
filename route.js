const express = require('express')
const router = express.Router()
const PingController = require('./controller/pingController')
const randomQuoteController = require('./controller/randomQuoteController')
const getRecipeController = require('./controller/geminiController')

router.get('/ping', PingController.ping)
router.get('/pong', PingController.pong)

router.get('/get-quote', randomQuoteController.getData)

router.post('/recipe', getRecipeController.getRecipe)
module.exports = router