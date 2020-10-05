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
    setAllBooks((prevValue) => {
      return [...prevValue, formData];
    });
  };

  const onClick = () => {
    setExpanded((prevValue) => !prevValue);
  };

  if (isLoading) {
    return <div className="loader">Loading</div>;
  }

  return (
    <div className="App">
      <Navbar />
      {isExpanded && <Form onSubmit={onSubmit} onClick={onClick} />}
      {allBooks.map((book, index) => (
        <Card cover={book.cover} year={book.year} />
      ))}
      <Button onClick={onClick} />
    </div>
  );
}

export default App;
