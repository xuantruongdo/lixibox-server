const moongoose = require('mongoose')
const Schema = moongoose.Schema

const Product = new Schema(
    {
        name: {type: String, require: true},
        brand: {type: String, require: true},
        image: {type: String, require: true},
        category: {type: Number, require: true},
        oldPrice: {type: Number, require: true},
        currentPrice: {type: Number, require: true},
        saleRatio: {type: Number},
        stock: {type: Number, require: true},
    },
    {
        timestamps: true
    }
)

module.exports = moongoose.model("Product", Product)