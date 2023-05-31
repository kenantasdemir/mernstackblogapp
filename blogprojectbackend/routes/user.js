const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Users = require("../models/user");

router.put("/:id/password", (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            res.status(500).json({ error: "Şifre güncelleme hatası: " + err });
        } else {
            Users.findByIdAndUpdate(id, { password: hashedPassword })
                .then(() => {
                    res.json({ message: "Şifre başarıyla güncellendi" });
                })
                .catch((error) => {
                    res.status(500).json({ error: "Şifre güncelleme hatası: " + error });
                });
        }
    });
});



router.post("/logout",(req,res)=>{
    req.session.destroy((error)=>{
        if(error){
            res.status(500).json({error:"Çıkış yapma hatası: " + error})
        }else{
            res.status(200).json({message:"Çıkış başarılı. "}).redirect("/login")
        }
    })
})




router.post("/forgotten-password",(req,res)=>{

    const {email,message} = req.body

    const transporter = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"kenant103@gmail.com",
            pass:"KenanTasdemir123.."
        }
    })


    const sendEmail = async(to,subject,text)=>{
        try{
            await transporter.sendMail({
                from:"kenant103@gmail.com",
                to:email,
                subject:"Şifre sıfırlama maili",
                text:message
            })
            res.status(200).json({ message: 'E-posta gönderildi' });

            console.log("e posta gönderildi")
        }catch(error){
            console.error("e posta gönderme hatası",error)
            res.status(500).json({ error: 'E-posta gönderme hatası' });
        }
    }

     sendEmail()
})



router.post("/register",(req,res)=>{
    const {firstName,lastName,age,email,password} = req.body
    bcrypt.hash(password,10,(err,hashedPassword)=>{
        if(err){
            res.status(500).json({error:"Kullanıcı kaydetme hatası: " + err})
        }else{
            const user = User.create({
                firstName,lastName,age,email,password:hashedPassword
            })

            user.save().then(()=>{
                res.status(201).json({message:"Kullanıcı başarıyla kaydedildi."})
            }).catch((error)=>{
                res.status(500).json({error:"Kullanıcı kaydetme hatası: " + error})
            })
        }
    })
})


router.delete("/delete-user/:id",(req,res)=>{
  if(req.isAuthenticated){
    const {id} = req.params
    Users.deleteOne(id).then(()=>{
        console.log("user has been deleted")
        res.status(200).message("kullanıcı başarıyla silindi.").redirect("/login")
    }).catch((error)=>{
        console.log(error)
    })
  }else{
        res.redirect("/login")
}

})


module.exports = router;
