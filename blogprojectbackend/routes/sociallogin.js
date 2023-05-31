const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        // Google ile giriş başarılı olduğunda yapılacak işlemler
        res.redirect("/blogs"); // İstenilen sayfaya yönlendirme
    }
);

router.get(
    "/facebook",
    passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (req, res) => {
        // Facebook ile giriş başarılı olduğunda yapılacak işlemler
        res.redirect("/blogs"); // İstenilen sayfaya yönlendirme
    }
);

module.exports = router;
