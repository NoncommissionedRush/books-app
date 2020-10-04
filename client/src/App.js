import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("/api/books");
      setAllBooks(resp.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loader">Loading</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Form />
      {allBooks.map((book, index) => (
        <Card cover={book.cover} year={book.year} />
      ))}
    </div>
  );
}

export default App;
