const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis",
        unique: true
    },
    location: {
        type: String,
        required: "La location est requis"
    }
});

module.exports = mongoose.model('School', schoolSchema);