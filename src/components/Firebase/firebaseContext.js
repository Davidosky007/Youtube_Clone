import React, { Component } from "react";
import PropTypes from "prop-types";
import firebaseConnection from "../../configuration/firebase";

const defaultFirebaseContext = {
  authStatusReported: false,
  isUserSignedIn: false,
  user: null
};

export const FirebaseContext = React.createContext(defaultFirebaseContext);

export default class FirebaseAuthProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  state = defaultFirebaseContext;

  componentDidMount() {
    firebaseConnection.auth().onAuthStateChanged(user => {
      const usersRef = firebaseConnection.database().ref("users");

      usersRef.on("value", snapshot => {
        if (!snapshot.hasChild(user.uid)) {
          usersRef.child(user.uid).set({
            username: user.displayName,
            email: user.email,
            avatar:
              user.photoURL ||
              "https://app.nimia.com/static/img/default_profile.png",
            public: 0,
            providerID: user.providerData[0].providerId
          });
        }

        this.setState({
          authStatusReported: true,
          isUserSignedIn: !!user,
          user: snapshot.child(user.uid).val()
        });
      });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}
