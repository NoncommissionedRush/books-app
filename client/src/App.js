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

  // get data from database
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("/api/books");
      setAllBooks(resp.data);
      setLoading(false); // hide loader
    }

    fetchData();
  }, []);

  // upload data to database + get ID and add it to the new object
  const onSubmit = async (e, formData) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/books", formData, config);
    formData.id = res.data; // post response is the new DB entry ID
    setAllBooks((prevValue) => {
      return [...prevValue, formData];
    });
    // hide input form
    setExpanded(false);
  };

  // clicking FAB or overaly shows or hides the input form
  const onClick = () => {
    setExpanded((prevValue) => !prevValue);
  };

  // clicking the nav item sets "year"
  const navClick = async (e) => {
    setYear(e.target.getAttribute("data-value"));
  };

  // show loader
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar onClick={navClick} />
      {isExpanded && <Form onClick={onClick} />}
      {allBooks
        .filter((book) => year === "all" || book.year == year)
        .map((book, index) => (
          <Card key={index} cover={book.cover} id={book.id} />
        ))}
      <Button onClick={onClick} />
    </div>
  );
}

export default App;
