require('dotenv').config()
const massive = require('massive')
const express = require('express')
const app = express()
const pc = require('../server/product-controller');

const { CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB is set!', db.listTables())
    app.listen(SERVER_PORT, () => {
        console.log(`Magic is happening on ${SERVER_PORT}`)
    })
}).catch(err => console.log( err ))

app.get('/api/inventory', pc.readAllProducts)
app.post('/api/product', pc.createProduct)
app.put('/api/product/:id', pc.updateProduct)
app.delete('/api/product/:id', pc.deleteProduct)