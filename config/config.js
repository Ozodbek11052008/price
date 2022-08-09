const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/price', {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        family : 4
    })
    .then(data => {
        console.log('Mongodb is connected');
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = connectDB