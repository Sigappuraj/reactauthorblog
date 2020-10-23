import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import  {Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/authors">
          <Authors/>
        </Route>
        <Route path="/posts/:id">
          <PostPage/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
