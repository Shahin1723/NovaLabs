const mongoose = require('mongoose');

let sellerSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

let Seller = module.exports = mongoose.model('Seller', sellerSchema);