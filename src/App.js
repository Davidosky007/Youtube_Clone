import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppSidebar from "./components/layout/AppSidebar";
import FirebaseAuthProvider from "./components/Firebase/firebaseContext";
import Home from "./components/Home/Home";
import NotFound from "./components/Errors/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <FirebaseAuthProvider>
            <AppSidebar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </AppSidebar>
          </FirebaseAuthProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
