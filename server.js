const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
require('dotenv').config()

// initialing server//
const server = express()
// setting up for cors//
server.use(cors())

// parse various data//
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

// parsing routes//
const routes = require('./api/routes')
routes(server)

//setting up the port//
server.listen(PORT, () => {
    console.log(`Mailing microservice is now active on  port ${PORT}`)
})
