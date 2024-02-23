const express = require('express');
const mongoose = require('./db');
const cors = require('cors');
const app = express();

app.use(cors()); // Use cors middleware before defining routes(important!)

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const highScoreRoutes = require('./routes/highScoreRoutes');

app.use('/api/users', userRoutes);
app.use('/api/highScores', highScoreRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


