const moongoose = require('mongoose')
const Schema = moongoose.Schema

const User = new Schema(
    {
        username: {type: String, require: true,},
        email: {type: String, require: true,},
        password: {type: String, require: true},
        isAdmin: {type: Boolean, default: false},
        fullname: {type: String, default:""},
        birthday: {type: String, default:""},
        phone: {type: String, default:""},
        address: {type: String, default:""},
    },
    {
        timestamps: true
    }
)

module.exports = moongoose.model("User", User)