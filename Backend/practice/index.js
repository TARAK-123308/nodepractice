// server.js
const express = require("express");
const port = 3458;
const app = express();
const { parameterBYIndex, queryparameterBYIndex } = require("./requesthandler/controller");

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Tarak ewwwww...,.</h1>");
});

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();  
});


app.get('/contact', (req, res) => {
    res.send("<h1>contact ewwwww...,.</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>about ewwwww...,.</h1>");
});

app.post('/hai', (req, res) => {
    res.send("<h1>Post ewwwww...,.</h1>");
});

app.get("/item/:index/:name", parameterBYIndex);

app.get("/item", queryparameterBYIndex);

app.post('/userdata', (req, res) => {
    const { name, age } = req.body;   
    console.log("Received Data:", { name, age });
    res.json({
        data: { name, age }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
