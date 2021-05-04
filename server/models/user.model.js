const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : { type: String, required: true},
    id: { type: String, requried: true},
    applied:{ type: Boolean, required: true},
    applicationId:{ type: String, required: false}  // id used for finding the application
});

const User = mongoose.model('User', userSchema);
module.exports = User;