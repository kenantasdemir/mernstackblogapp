const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Ad alanı boş olamaz"],
        trim:true,
        minlength:2,
        maxlength:[30,"Ad bilgisi maksimum 30 karakter olabilir."]
    },
    surname:{
        type:String,
        required:[true,"Soyadı alanı boş olamaz"],
        trim:true,
        minlength:2,
        maxlength:[30,"soyad bilgisi maksimum 30 karakter olmalıdır."]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    avatar:{
        type:String,
        default:"default.png"
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:13,
        maxlength:35
    }
},{collection:"users",timestamps:true})

const User = mongoose.model("user",userSchema)

module.exports = User