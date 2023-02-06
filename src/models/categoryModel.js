const moongoose = require('mongoose')
const Schema = moongoose.Schema

const Category = new Schema(
    {
        name: {type: String, require: true},
        key: {type: Number, require: true},
        parent: {type: Number, default: null}
    },
    {
        timestamps: true
    }
)

module.exports = moongoose.model("Category", Category)