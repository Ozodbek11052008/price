const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Shohruh:349672@cluster0.pelmz.mongodb.net/price?retryWrites=true&w=majority', {
        useNewUrlParser : true
    })
    .then(data => {
        console.log('Mongodb is connected');
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = connectDB