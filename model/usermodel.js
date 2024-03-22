var mongoose = require('mongoose')

var Userschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    pass:{
        type:String,
    }
})

module.exports = mongoose.model('User-data',Userschema)  