const isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }else{
        req.flash("error",["lütfen önce oturum açın"])
        res.redirect("/login")
    }
}


const isNotLoggedIn = function(req,res,next){
    if(!req.isAuthenticated()){
        return next()
    }else{
        res.redirect("/register")
    }
}

module.exports={
    isLoggedIn,
    isNotLoggedIn
}