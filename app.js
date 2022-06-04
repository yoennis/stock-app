const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Request received');

    res.send('<h1>Hello, world!</h1>');
});

app.listen(4000, () => {
    console.log('Servidor listening on port 4000');
});