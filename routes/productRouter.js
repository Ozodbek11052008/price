const router = require('express').Router()
const productController = require("../controllers/productController")
const multer = require('multer')

const upload = multer({
    dest : 'public/uploads'
})

router.post('/api/product', upload.single('photo'), productController.prices)
router.delete('/api/products/delete/:id', productController.deleteProducts)
module.exports = router