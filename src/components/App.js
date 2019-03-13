import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Aboutpage from "./about/AboutPage";
import Header from "./common/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={Aboutpage} />
    </div>
  );
}

export default App;
