const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false,
        maxlength: [300, 'About can only be 300 characters']
    },
    lookingFor: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
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