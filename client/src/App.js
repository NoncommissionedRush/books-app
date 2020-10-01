import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("/api/books");
      setAllBooks(resp.data);
      setLoading(false);
    })();
  });

  if (isLoading) {
    return <div className="loader">Loading</div>;
  }

  return (
    <div className="App">
      <Navbar />
      {allBooks.map((book, index) => (
        <Card />
      ))}
    </div>
  );
}

export default App;
