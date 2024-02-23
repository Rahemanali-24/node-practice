const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://demo-data:YhZIu8nTg8wrbF8R@cluster0.lsqhpuw.mongodb.net/';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  
  mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;