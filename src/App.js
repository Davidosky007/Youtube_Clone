import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppSidebar from "./components/layout/AppSidebar";
import FirebaseAuthProvider from "./components/Firebase/firebaseContext";
import Home from "./components/Home/Home";
import NotFound from "./components/Errors/NotFound";
import UserChannel from "./components/UserChannel/UserChannel";
import VideoDetail from "./components/Home/VideoDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <FirebaseAuthProvider>
            <AppSidebar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/channel/:username"
                  component={UserChannel}
                />
                <Route exact path="/video/:videoId" component={VideoDetail} />
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
