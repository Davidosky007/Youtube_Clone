import React, { Component } from "react";
import { Icon, Sidebar, Menu } from "semantic-ui-react";
import Navbar from "./Navbar";
import firebaseConnection, { firebase } from "../../configuration/firebase";
import { FirebaseContext } from "../Firebase/firebaseContext";

export default class AppSidebar extends Component {
  state = { sidebarVisible: false };

  componentDidMount() {}

  handleSocialLogin = e => {
    firebaseConnection
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSidebarClick = e => {
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  };

  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={this.handleSidebarClick}
          vertical
          visible={this.state.sidebarVisible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="home" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="home" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="home" />
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={this.state.sidebarVisible}>
          <FirebaseContext.Consumer>
            {({ user }) => (
              <Navbar
                user={user}
                handleSocialLogin={this.handleSocialLogin}
                handleSidebarClick={this.handleSidebarClick}
              />
            )}
          </FirebaseContext.Consumer>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
