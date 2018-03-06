var express = require('express')
var app = express()
var logger = require('morgan')
// var fs = require('fs')
var pagesCtrl = require('./controllers/pages.js')
var PORT = 3000

app.use(logger('dev'))

// String interpolation example
// var firstName = "James"
// var lastName = "Blocker"
// res.send(`Welcome, ${firstName} ${lastName}. Today is ${new Date()}`)

//Send file from views folder
app.get('/', pagesCtrl.home)
app.get('/about', pagesCtrl.about)
app.get('/contact', pagesCtrl.contact)

app.listen(PORT, function(err) {
    // if(err) {
    //     console.log(err)
    // } else {
    //     console.log("Server running on 3000.");
    // }
    console.log(err || `Server running on ${PORT}`)
})
