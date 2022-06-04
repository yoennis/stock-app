require('dotenv').config();
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    console.log('Request received');

    res.send('<h1>Hello, world!</h1>');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor listening on port ${PORT}`);
});