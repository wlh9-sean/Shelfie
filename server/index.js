require('dotenv').config()
const express = require('express')
const massive = require('massive')

const ctrl = './controller'

const {CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
})




const port = 4000
app.listen(port, () => console.log(`Listening on ${port}`))