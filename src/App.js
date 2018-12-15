import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <Route exact path="/" render={() => <p>home</p>} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
