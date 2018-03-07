const express = require('express')
const app = express()
const PORT = 3000

var checkPaid = false
var total = 0

var rats = ['Splinter', 'Vince', 'Arthur']

var products = {
    coke: {price: 4},
    burger: {price: 15},
    fries: {price: 6}
}

app.get('/product/:name', function(req, res) {
    total = total + products[req.params.name].price
    console.log(total)
    res.send('Here is your ' + req.params.name +', ejoy!')
})

app.get('/total-purchase', function(req, res) {
    res.send(`your total is ${total}`)
})

app.patch('/reset-order', function(req, res) {
    checkPaid = false
    total = 0
    res.send(`Your total is ${total} and you check is paid: ${checkPaid}`)
})

app.post('/pay', function(req, res) {
    checkPaid = true
    res.send('Thanks for your payment')
})

app.get('/payment-status', function(req, res) {
    res.send(`Check paid: ${checkPaid}`)
})

app.get('/rats', function(req, res) {
    res.send(rats)
})

app.delete('/rats', function(req, res) {
    rats = null
    res.send(rats)
})

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`)
})