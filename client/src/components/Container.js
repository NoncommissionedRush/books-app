import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Card from "./Card";

function Container(props) {
  const [isReversed, setReversed] = useState(false);

  const location = useLocation();

  const allBooks = props.allBooks;

  // // reverse order of the books on "all"
  useEffect(() => {
    (() => {
      if (props.year === "all" && !isReversed) {
        console.log("year je all a fungujeme");
        allBooks.reverse();
        setReversed(true);
      } else if (props.year !== "all" && isReversed) {
        allBooks.reverse();
        setReversed(false);
      }
    })();
  }, [location]);

  return (
    <Fragment>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 500, exit: 500 }}
          classNames={"item"}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="container">
                    {allBooks.map((book, index) => (
                      <Card key={index} cover={book.cover} id={book.id} />
                    ))}
                  </div>
                )}
              />
              <Route
                exact
                path="/2018"
                render={() => (
                  <div className="container">
                    {allBooks
                      .filter((book) => book.year == 2018)
                      .map((book, index) => (
                        <Card key={index} cover={book.cover} id={book.id} />
                      ))}
                  </div>
                )}
              />
              <Route
                exact
                path="/2019"
                render={() => (
                  <div className="container">
                    {allBooks
                      .filter((book) => book.year == 2019)
                      .map((book, index) => (
                        <Card key={index} cover={book.cover} id={book.id} />
                      ))}
                  </div>
                )}
              />
              <Route
                exact
                path="/2020"
                render={() => (
                  <div className="container">
                    {allBooks
                      .filter((book) => book.year == 2020)
                      .map((book, index) => (
                        <Card key={index} cover={book.cover} id={book.id} />
                      ))}
                  </div>
                )}
              />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}

export default Container;
