const mongoose = require("mongoose");

const Blog = mongoose.model("Blog", {
    title: String,
    content: String
});

module.exports = Blog;
