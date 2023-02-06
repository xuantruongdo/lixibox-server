const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Connect successfully")
    }
    catch(err){
        console.log("Connect failure!")
    }
}

module.exports = {connect}