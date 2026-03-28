// Entry point for the Email Manager and Job Automator
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Email Manager and Job Automator!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
