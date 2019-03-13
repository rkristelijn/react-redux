import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Aboutpage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursePage from "./courses/CoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
