require('dotenv').config()
const express = require('express')
const massive = require('massive')

const appCtrl = require('./controller')

const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
})


app.get('/api/inventory', appCtrl.getInventory)
app.post('/api/product', appCtrl.createProduct)




app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))