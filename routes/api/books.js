const express = require("express");
const router = express.Router();
const Book = require("../../models/Book");

//@route  GET /api/books
//@desc get all books from database
router.get("/", async (req, res) => {
  const allBooks = await Book.find({});

  res.send(allBooks);
});

//@route  POST /api/books
//@desc add book to database
router.post("/", async (req, res) => {
  const { title, author, pages, year, cover } = req.body;

  new Book({
    title,
    author,
    pages,
    year,
    cover,
  }).save((err, book) => {
    if (!err) {
      res.send(book._id);
    }
  });
});

//@route  DELETE /api/books/bookID
//@desc   remove book from database

router.delete("/:id", async (req, res) => {
  Book.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.send("book succesfully deleted from db");
    }
  });
});

module.exports = router;
