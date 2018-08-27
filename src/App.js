import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route component={Error} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
