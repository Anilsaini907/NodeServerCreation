var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
var piedata = [ 
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 },]

app.get('/', function (req, res) {
    res.send(piedata)
})
       
   

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})