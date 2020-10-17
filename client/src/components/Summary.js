import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Summary(props) {
  const allBooks = props.allBooks;
  const year = props.year;
  const [bookCount, setBookCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

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
  }, [year, allBooks]);

  return (
    <p className="summary">
      Dokopy <span className="strong">{bookCount}</span> kníh |{" "}
      <span className="strong">{pageCount}</span> strán
    </p>
  );
}

export default Summary;
