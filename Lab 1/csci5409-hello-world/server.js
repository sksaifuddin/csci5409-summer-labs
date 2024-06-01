// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the Node.js server!');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
