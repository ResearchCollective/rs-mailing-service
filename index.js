const express = require('express')
const router = express.Router()

// initialing app//
const app = express()
// greetining//
app.get('/', (req, res, next) => {
    res.json('This is mailing microservice for researchcollective.io')
})

//setting up the port//
app.listen(8000, () => {
    console.log('Microservice is now active')
})