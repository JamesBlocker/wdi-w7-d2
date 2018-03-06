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
    res.send("<h1>The about page</h1>")
})

app.get('/contact', function(req, res) {
    res.send("<h1>Contact me!</h1>")
})

app.listen(PORT, function(err) {
    // if(err) {
    //     console.log(err)
    // } else {
    //     console.log("Server running on 3000.");
    // }
    console.log(err || `Server running on ${PORT}`)
})