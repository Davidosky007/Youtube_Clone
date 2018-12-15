import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppSidebar from "./components/layout/AppSidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <AppSidebar>
              <Route exact path="/" render={() => <p>home</p>} />
            </AppSidebar>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
