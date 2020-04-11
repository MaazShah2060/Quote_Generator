const quotes = require("quotesy");
const express = require('express');
const app = express();
app.get("/", function(req, res) {
    var quote = quotes.random();
    res.send("<style> p {font-size: 2rem; color: red; text-align: center; margin-top: 0px;} h4 {font-size: 3rem; color: blue; text-align: center; margin-bottom:1px; margin-top: 13rem;}</style><h4>" + quote['text'] + "</h4>" + "<br><p>~" + quote['author'] + "</p>");
});
app.listen(3000, function() {
    console.log("The server has started at port 3000. Launch your browser and goto localhost:3000 Every time you reload the page a new random quote would be generated");
});