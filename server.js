var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.send('GoodBye World')
});
app.listen(3000);