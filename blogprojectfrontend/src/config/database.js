const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log("connected"))
.catch(error=> console.log(`${error}`))