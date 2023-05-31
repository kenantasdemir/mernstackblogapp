const mongoose = require("mongoose")
const Schema = mongoose.Schema


const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:[5,"Title alanı 5 karakterden kısa olamaz."],
        maxlength:[75,"Title alanı 75 karakterden uzun olamaz."]
    },
    content:{
        type:String,
        required:true,
        minlength:[25,"İçerik 25 karakterden kısa olamaz"],
        maxlength:[500,"İçerik 500 karakterden uzun olamaz."]
    }
},{collection:"blog",timestamps:true})

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog