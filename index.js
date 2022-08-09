const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const path = require('path')
const connectDB = require('./config/config')
const cors = require('cors')
connectDB()
app.use(express.json(), express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname + '/public')))
app.use(cors())
app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.set('views', './view')
// ejs setup
app.use(require('./routes/productRouter'))


const Price = require('./models/priceSchema')
app.get('/', (req, res) => {
    const price = Price.find()
    res.render('datas/price.ejs', {
        layout: false,
        price
    })
})
app.get('/product', async (req, res) => {
    try {
        const price = await Price.find()
        res.send(price)
    } catch (error) {
        res.send(error)
    }
})

app.listen(PORT, () => {

    console.log(`Sever is running at ${PORT} port`)
})
