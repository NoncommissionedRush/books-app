import React, { Fragment, useState } from "react";
import axios from "axios";

function Form(props) {
  const [formData, setFormdata] = useState({
    author: "",
    title: "",
    pages: "",
    year: "",
    cover: "",
  });

  const { author, title, pages, year, cover } = formData;

  const onChange = (e) =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/books", formData, config);
    console.log(res.data); // this is the id of the book from the database
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)} className="input-form">
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="author"
          placeholder="Autor"
          value={author}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="title"
          placeholder="Názov"
          value={title}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="pages"
          placeholder="Počet strán"
          value={pages}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="year"
          placeholder="Rok"
          value={year}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="cover"
          placeholder="Obálka"
          value={cover}
        />
        <button>Pridaj</button>
      </form>
    </Fragment>
  );
}

export default Form;
