const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = 3000

app.use(logger('dev'))

app.get('/red', function(req, res) {
    res.send("<h1>Rojo</h1")
})

app.get('/sun', function(req, res) {
    res.send('<h1>Sol</h1>')
})

app.get('/hand', function(req, res) {
    res.send('<h1>Mano</h1>')
})

app.get('/godblessyou', function(req, res) {
    res.send('<h1>Salud</h1>')
})

app.listen(PORT, function(err) {
    console.log(err || `Server is running on ${PORT}`)
})