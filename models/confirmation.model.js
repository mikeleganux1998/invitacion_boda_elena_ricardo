const mongoose = require('mongoose');

const {Schema} = mongoose;

const confirmationSchema = new Schema({
    phone: { type: String, required: true, unique: true },
    name: String,
    email: String,
    confirmation: String,
    notes: String,
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
})

module.exports = mongoose.model('Confirmation', confirmationSchema);