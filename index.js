const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
const alldata = [
    { firstName: "John", age: 27 },
    { firstName: "James", age: 32 }
]
// GET Request
app.get('/', (req, resp) => {
    resp.send("Customers data 1")
})
app.get('/customer', (req, resp) => {
    resp.send(alldata)
})
// GET byage
app.get('/customer/byage/:age', (req, resp) => {
    const customer = alldata.find(v => v.age === parseInt(req.params.age))
    if (!customer) resp.status(404).send('customer not found')
    resp.send(customer)
})
// GET byfirstName
app.get('/customer/byfirstName/:firstName', (req, resp) => {
    const byfirstname = alldata.find(x => x.firstName)
    if (!byfirstname) resp.status(404).send('customer byfirstname not found')
    resp.send(byfirstname)
})

app.listen(8080, (err) => {
    if (err) console.log("Error ")
    else console.log("server is running !")
})