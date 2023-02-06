const moongoose = require('mongoose')
const Schema = moongoose.Schema

const Order = new Schema(
    {
        receiver: {type: String, require: true},
        phone: {type: String, require: true},
        province: {type: String, require: true},
        district: {type: String, require: true},
        ward: {type: String, require: true},
        address: {type: String, require: true},
        cart: {type: Array, require: true, default: []},
        total: {type: Number, require: true},
    },
    {
        timestamps: true
    }
)

module.exports = moongoose.model("Order", Order)