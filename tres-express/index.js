const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = 3000

app.use(logger('dev'))

app.get('/', function(req, res) {
    res.send('<h1>Home page mutha fucka!!!!</h1')
})

app.get('/contact', function(req, res) {
    res.send('<h1>Contact page MUTHA FUCKA!!!</h1>');
})

app.get('/about', function(req, res) {
    res.send('<h1>About page MUTHA FUCKA!!!!</h1>')
})

app.get('/users', function(req, res) {
    res.send('<h1>User page MUTHA FUCKA!!!!</h1>')
})

app.listen(PORT, function(err) {
    console.log(err || `Server is running on port ${PORT}`)
})