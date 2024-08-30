const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
res.send('<h1> Hello, Dhruv! </h1>');
});

app.get('/ben', (req, res) => {
    res.send('<h1> Greeting, Ben </h1> <br> <h2> How are you doing today? </h2> <br> <h3> I hope you are having a great day! </h3> <br> <h4> Rajesh my Balans uWu </h4>'); 
});

app.listen(8000, () => {
console.log(`Server is listening at http://localhost:8000`);
});

