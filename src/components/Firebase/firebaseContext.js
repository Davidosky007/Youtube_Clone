import React, { Component } from "react";
import PropTypes from "prop-types";
import { firebaseModules } from "../../configuration/firebase";
import axios from "axios";

const { database, auth } = firebaseModules;

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
    auth.onAuthStateChanged(user => {
      if (user) {
        const usersRef = database.ref("users");
        const channelsRef = database.ref("channels");
        const videosRef = database.ref("videos");
        usersRef.once("value", snapshot => {
          if (!snapshot.hasChild(user.uid)) {
            usersRef.child(user.uid).set({
              username: user.displayName,
              email: user.email,
              avatar:
                user.photoURL ||
                "https://app.nimia.com/static/img/default_profile.png",
              public: 1,
              providerID: user.providerData[0].providerId
            });
          }
          this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user,
            user: user ? snapshot.child(user.uid).val() : null
          });
        });

        channelsRef.once("value", snapshot => {
          if (!snapshot.hasChild(user.uid)) {
            axios
              .get("http://ip-api.com/json")
              .then(response => {
                const { query, status, ...geolocation } = response.data;
                channelsRef.child(user.uid).set({
                  user: user.uid,
                  subscribers: 0,
                  totalVisualizations: 0,
                  description: "",
                  createdAt: new Date().getTime(),
                  links: {},
                  location: geolocation
                });
              })
              .catch(err => console.error(err));
          }
        });

        videosRef.once("value", snapshot => {
          for (let index = 0; index < 21; index++) {
            videosRef.child(index + "pene").set({
              thumbnail: "https://i.ytimg.com/vi/5Umge0eM1Hw/maxresdefault.jpg",
              title: "",
              user: "",
              channel: "",
              visualizations: 0,
              createdAt: new Date().getTime(), //TODO - THIS IS TEMPORAL
              duration: 0,
              likes: 0,
              dislikes: 0,
              description: "",
              category: "",
              comments: ""
            });
          }
        });
      }
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
