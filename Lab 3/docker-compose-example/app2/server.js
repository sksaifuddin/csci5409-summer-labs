// server.js for app2
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from app2!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App2 is running on port ${PORT}`);
});
