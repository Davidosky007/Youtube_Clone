import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppSidebar from "./components/layout/AppSidebar";
import FirebaseAuthProvider from "./components/Firebase/firebaseContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <FirebaseAuthProvider>
            <AppSidebar>
              <Route exact path="/" render={() => <p>home</p>} />
            </AppSidebar>
          </FirebaseAuthProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
