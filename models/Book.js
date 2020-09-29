const { urlencoded } = require("express");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  year: Number,
  cover: String,
});

const Book = new mongoose.model("book", bookSchema);

module.exports = Book;
