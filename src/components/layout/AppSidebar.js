import React, { Component } from "react";
import { Icon, Sidebar, Menu } from "semantic-ui-react";
import Navbar from "./Navbar";

export default class AppSidebar extends Component {
  state = { sidebarVisible: false };

  componentDidMount() {}

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
          inverted
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
          <Navbar handleSidebarClick={this.handleSidebarClick} />
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
