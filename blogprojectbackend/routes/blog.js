const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Bir kullanıcının tüm bloglarını listeleme
router.get("/:id/myblogs", (req, res) => {

    if(req.isAuthenticated){
                
    const id = parseInt(req.params.id);
    Blog.find({ userId: id })
        .then(userBlogs => {
            res.json(userBlogs);
        })
        .catch(error => {
            res.status(500).json({ error: "veritabanı hatası: " + error.message });
        });
    }

});

router.post("/create-blog", async (req, res) => {
    if(req.isAuthenticated){
        const { title, content } = req.body;

    const blog = new Blog({ title, content });

    blog.save()
        .then(() => {
            res.status(201).json({ message: "Blog başarıyla eklendi" });
        })
        .catch((error) => {
            res.status(500).json({ error: "Blog ekleme hatası: " + error });
        });
    }else{
        res.redirect("/login")
    }
});




router.put("/myblogs/update-blog/:id",(req,res)=>{
   if(req.isAuthenticated){
    const {id} = req.params
    const {title,content} = req.body


    Blog.findByIdAndUpdate(id,{title,content}).then(()=>{
        res.status(200).json({message:"Makale güncelleme başarılı"})
    }).catch((error)=>{
        res.status(500).json({error:"makale günelleme hatası: " + error})
    })
   }else{
    res.redirect("/login")
   }
})




router.delete("/blog/:id",(req,res)=>{
    if(req.isAuthenticated){
        const {id} = req.params


    Blog.deleteOne(id).then(()=>{
        console.log("makale silme başarılı")
    }).catch((error)=>{
        console.log("makale silme başarısız: " + error)
    })
    }else{
        res.redirect("/login")
    }
})


// Diğer blog rotalarını buraya ekleyin

module.exports = router;
