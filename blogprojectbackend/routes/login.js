const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Users = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kullanıcının veritabanında varlığını kontrol et
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı." });
        }

        // Şifre eşleşmesini kontrol et
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Geçersiz şifre." });
        }

        // Giriş başarılı, kullanıcıya token veya diğer verileri döndür
        res.status(200).json({ message: "Giriş başarılı.", user: user });
    } catch (error) {
        res.status(500).json({ error: "Giriş hatası: " + error });
    }
});

module.exports = router;
