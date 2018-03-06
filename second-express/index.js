const express = require('express')
const app = express()
const logger = require('morgan')
const fs = require('fs')
const PORT = 3000

// log request to terminal
function customLogger(req, res, next) {
    console.log(req.url)
    next()
}

// slowdown server intentionally
function throttle(req, res, next) {
    setTimeout(next, 5000)
}

app.use(customLogger)
app.use(throttle)

app.get('/', function(req, res) {
    res.send('Home page!')
})

app.get('/users', function(req, res) {
    res.send("users index...")
})

// params built in express :something
// app.get('/users/:userId/posts/:postId', function(req, res){
//     console.log(req.params)
//     res.send(`<h1>params example</h1>`)
// })

app.listen(PORT, function(err) {
    console.log(err || `Server running on ${PORT}`)
})
