const mongoose = require('mongoose')

const priceSchema = mongoose.Schema({
    product: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        minLength: 3
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 50
    },
    photo : String
}, {
    timestamps: true
})

module.exports = mongoose.model("Price", priceSchema)