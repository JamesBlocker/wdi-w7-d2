var fs = require('fs')

module.exports = {
    home: function(req, res) {
        fs.readFile('./views/home.html', 'utf-8', function(err, data) {
            res.send(data)
        })  
    }, 

    about: function(req, res) {
        fs.readFile('./views/about.html', 'utf-8', function(err, data) {
            res.send(data)
        })
    },

    contact: function(req, res) {
        fs.readFile('./views/contact.html', 'utf-8', function(err, data) {
            res.send(data)
        })
    }
}