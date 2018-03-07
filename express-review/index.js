const express = require('express')
const app = express()
const PORT = 3000

var books = {
    Bible: {name: "Bible", author: "kingJames"},
    Odyssey: {name: "Odyssey", author: "Homer"}
}

app.get('/books', function(req, res){
    res.send(books)
})

app.post('/books/:name/:author', function(req, res){
    books[req.params.name] = {name: req.params.name, author: req.params.author}
    res.send(books)
})

app.delete('/books/:name', function(req, res){
    delete books[req.params.name]
    res.send(books)
})

app.patch('/books/:name/:new_name', function(req,res){
    books[req.params.name] = {name: req.params.new_name, author: books[req.params.name].author}
    res.send(books)
})

app.listen(PORT, function(err){
    console.log(err || `Server running on ${PORT}`)
})