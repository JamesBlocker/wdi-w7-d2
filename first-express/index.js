var express = require('express')
var app = express()
var logger = require('morgan')
var fs = require('fs')
var PORT = 3000

app.use(logger('dev'))

app.get('/', function(req, res) {
    // String interpolation example
    // var firstName = "James"
    // var lastName = "Blocker"
    // res.send(`Welcome, ${firstName} ${lastName}. Today is ${new Date()}`)

    //Send file from views folder
    fs.readFile('./views/home.html', 'utf-8', function(err, data) {
        res.send(data)
    })

})

app.get('/about', function(req, res) {
    fs.readFile('./views/about.html', 'utf-8', function(err, data) {
        res.send(data)
    })
})

app.get('/contact', function(req, res) {
    fs.readFile('./views/contact.html', 'utf-8', function(err, data) {
        res.send(data)
    })
})

app.listen(PORT, function(err) {
    // if(err) {
    //     console.log(err)
    // } else {
    //     console.log("Server running on 3000.");
    // }
    console.log(err || `Server running on ${PORT}`)
})