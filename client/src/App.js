import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Button from "./components/Fab";
import Summary from "./components/Summary";
import Container from "./components/Container";

function App() {
  // states
  const [year, setYear] = useState("all");
  const [isLoading, setLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [isExpanded, setExpanded] = useState(false);

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

  // clicking the nav item sets "year"
  const navClick = async (e) => {
    setYear(e.target.getAttribute("data-value"));
  };

  // clicking FAB or overaly shows or hides the input form
  const onClick = () => {
    setExpanded((prevValue) => !prevValue);
  };

  // show loader
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar navClick={navClick} />
        <Summary year={year} allBooks={allBooks} />
        <Container year={year} allBooks={allBooks} />
        {isExpanded && <Form onClick={onClick} onSubmit={onSubmit} />}
        <Button onClick={onClick} />
      </div>
    </Router>
  );
}

export default App;
