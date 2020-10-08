import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";
import Form from "./Form";
import Button from "./Fab";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [isExpanded, setExpanded] = useState(false);
  const [year, setYear] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("/api/books");
      setAllBooks(resp.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const onSubmit = async (e, formData) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/books", formData, config);
    console.log(res.data); // this is the id of the book from the database
    formData.id = res.data;
    setAllBooks((prevValue) => {
      return [...prevValue, formData];
    });

    setExpanded(false);
  };

  const onClick = () => {
    setExpanded((prevValue) => !prevValue);
  };

  const navClick = async (e) => {
    setYear(e.target.getAttribute("data-value"));
  };

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar onClick={navClick} value={year} />
      {isExpanded && <Form onClick={onClick} />}
      {allBooks
        .filter((book) => year === "all" || book.year == year)
        .map((book, index) => (
          <Card key={index} cover={book.cover} year={book.year} id={book.id} />
        ))}
      <Button onClick={onClick} />
    </div>
  );
}

export default App;
