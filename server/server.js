require('dotenv').config()
const express = require('express')
const massive = require('massive')
const c = require('./controller')
const {PORT, STRING} = process.env

const app = express()
app.use(express.json())

//endpoints

//listening
massive(STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(PORT, ()=> console.log(`port ${PORT} is on and ready to copy`))
})

