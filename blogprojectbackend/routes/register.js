const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Users = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, age, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            firstName,
            lastName,
            age,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi." });
    } catch (error) {
        res.status(500).json({ error: "Kullanıcı kaydetme hatası: " + error });
    }
});

module.exports = router;
