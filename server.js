const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world! I am David!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listen to port ${PORT}...`);
});