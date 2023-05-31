const mongoose = require("mongoose");

const Users = mongoose.model("User", {
    email: String,
    password: String
});

module.exports = Users;
