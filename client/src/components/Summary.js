import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Summary(props) {
  const allBooks = props.allBooks;
  const year = props.year;
  const [bookCount, setBookCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [shortestBook, setShortestBook] = useState(0);
  const [longestBook, setLongestBook] = useState(0);
  const averagePageCount = Math.round(pageCount / bookCount);

  const location = useLocation();

  useEffect(() => {
    const displayedBooks = allBooks.filter(
      (book) => year === "all" || book.year == year
    );

    setPageCount(
      displayedBooks.reduce((acc, book) => {
        return acc + book.pages;
      }, 0)
    );

    setBookCount(displayedBooks.length);

    let longestBook = displayedBooks.reduce((max, book) =>
      max.pages > book.pages ? max : book
    );

    let shortestBook = displayedBooks.reduce((min, book) =>
      min.pages < book.pages ? min : book
    );

    setShortestBook(shortestBook.pages);

    setLongestBook(longestBook.pages);
  }, [year, allBooks]);

  return (
    <p className="summary">
      Dokopy <span className="strong">{bookCount}</span> kníh |{" "}
      <span className="strong">{pageCount}</span> strán | V priemere{" "}
      <span className="strong">{averagePageCount}</span> strán | Najkratšia{" "}
      <span className="strong">{shortestBook}</span> | Najdlhšia{" "}
      <span className="strong">{longestBook}</span>
    </p>
  );
}

export default Summary;
