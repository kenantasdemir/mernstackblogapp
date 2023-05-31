const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");

const nodemailer = require('nodemailer');
const passport = require("passport");
const session = require("express-session");

const dotenv = require("dotenv");
dotenv.config();

const cookieSession = require("cookie-session");


const { registerRoutes } = require("./routes/register");
const { loginRoutes } = require("./routes/login");
const { blogRoutes } = require("./routes/blog");
const { userRoutes } = require("./routes/user")
const {  socialLoginRoutes } = require("../blogprojectbackend/routes/sociallogin")





app.use(cookieSession({
    name:"mysession",
    keys:["kenant42"],
    maxAge:24*60*60*100
}))


app.use(cors({
    origin:"*",
    methods:"GET,PUT,DELETE,POST",
    optionsSuccessStatus:200
}))


app.use(passport.initialize());
app.use(passport.session());




app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/blogproject",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/blogs", blogRoutes);
app.use("/users", userRoutes);
app.use("/signinwithgoogle",socialLoginRoutes)
app.use("/signingwithfacebook",socialLoginRoutes)



app.listen(4000,()=>{
    console.log("sunucu çalışıyor, http://localhost:4000")
})














