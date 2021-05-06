const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// make schema for application (could have both suerId and applicaiton id, so we store users past application but that might be a bit much)
const applicationSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: {type: String, required: true}, 
    id:{ type: String, required: true},     // maybe google id, or random generated id (or we could use the object id that gets made with it in MongoDB). Used for finding this application
    schoolName: {type: String, required: false },
    responses:{ type: Object, required: false}, // prbly change this later (maybe make it required)
    resume:{type: Object, required: false}   // prbly use s3 for this
}, {
    timestamps: true,
});

const Application = mongoose.model('Application', applicationSchema);    
module.exports = Application;   // export this module