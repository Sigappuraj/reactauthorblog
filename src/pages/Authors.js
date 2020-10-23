import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import Author from "../components/Author";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const {path} = useRouteMatch();

  useEffect(() => {
    fetch("https://r9sg2.sse.codesandbox.io/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data.authors));
  }, []);

  return (
    <>
      <ul>
        {authors.map((author, index) => {
          return (
            <li key={index}>
              <NavLink to={`/authors/${author._id}`}>{author.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route exact path={`${path}/:authorId`}>
            <Author/>
        </Route>
      </Switch>
    </>
  );
};

export default Authors;
