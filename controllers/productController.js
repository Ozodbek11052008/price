const model = require("../models/priceSchema")

const productController = {
    prices : async (req, res) => {
        const price = new model({
            product : req.body.product,
            price     : req.body.price,
            company : req.body.company,
            photo : req.file.filename
        })
        await price.save()
            .then(data => res.send(data))
            .catch(err => {
                res.send(err)
            })

    },

    deleteProducts: async (req, res) => {
        await model.findByIdAndDelete(req.params.id)
            .then(data => res.send(data))
            .catch(err => res.send(err))
    },
}

module.exports = productController