const mogoose = require("mogoose")

const userSchema = new mogoose.Schema({

    firstName:{
        type:String,
        requred:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true
    }
})

const User = mogoose.model("user",userSchema)

module.exports = User