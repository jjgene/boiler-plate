const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,//스페이스 없어주는
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    role:{
        type:Number,
        default:1
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }

});

const User=mongoose.model('User',userSchema);
module.exports={User};