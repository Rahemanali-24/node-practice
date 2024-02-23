const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors({
  origin: 'http://localhost:4200',
}));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes here
app.get('/', function(req, res) {
    res.send("hello world");
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/api/:username', (req, res) => {
    res.json({ message: `hello from ${req.params.username}` });
});

app.get('/api/game', (req, res) => {
    res.json({ message: 'Hello from game!' });
});

app.get('/api/play', (req, res) => {
    res.json({ message: 'Hello from play!' });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
