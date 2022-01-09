const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: false
    },
    about: {
        type: String,
        required: false,
        maxlength: [300, 'About can only be 300 characters']
    },
    lookingFor: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    skills: {
        type: [String],
        required: false
    },
    experience: {
        type: [String],
        required: false
    },
    education: {
        type: [String],
        required: false
    },
    social: {
        linkedin: {
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);