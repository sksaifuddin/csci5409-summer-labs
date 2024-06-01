// server.js for app1
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://app2:3001');
        res.send(`Response from app2: ${response.data}`);
    } catch (error) {
        res.send('Error connecting to app2');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App1 is running on port ${PORT}`);
});
