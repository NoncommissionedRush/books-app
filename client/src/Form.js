import React, { Fragment, useState } from "react";

function Form(props) {
  const [formData, setFormdata] = useState({
    author: "",
    title: "",
    pages: "",
    year: "",
    cover: "",
    id: "",
  });

  const { author, title, pages, year, cover } = formData;

  const onChange = (e) =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          props.onSubmit(e, formData);
          setFormdata({
            author: "",
            title: "",
            pages: "",
            year: "",
            cover: "",
          });
        }}
        className="input-form"
      >
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="author"
          placeholder="Autor"
          autoComplete="on"
          value={author}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="title"
          placeholder="Názov"
          autoComplete="off"
          value={title}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="pages"
          placeholder="Počet strán"
          autoComplete="off"
          value={pages}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="year"
          placeholder="Rok"
          autoComplete="off"
          value={year}
        />
        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="cover"
          placeholder="Obálka"
          autoComplete="off"
          value={cover}
        />
        <button>Pridaj</button>
      </form>
      <div className="overlay" onClick={props.onClick}></div>
    </Fragment>
  );
}

export default Form;
