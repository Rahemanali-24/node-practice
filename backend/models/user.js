const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: { type: String, required: 'Please Enter userName', trim: true },
    email: { type: String, required: 'Please Enter email', trim: true },
    password: { type: String, required: 'Please Enter password', trim: true }
   
})
module.exports = mongoose.model('User',userSchema);

