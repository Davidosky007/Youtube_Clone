import React from "react";
import PropTypes from "prop-types";
import {
  Icon,
  Dropdown,
  Image,
  Button,
  Comment,
  Message,
  Popup
} from "semantic-ui-react";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";

const Navbar = ({ handleSocialLogin, handleSidebarClick, user }) => {
  return (
    <nav className={styles["Youtube__Navbar"]}>
      <div className={styles["Youtube__Navbar--brand"]}>
        <Icon
          onClick={handleSidebarClick}
          link
          color="grey"
          name="bars"
          size="large"
        />
        <span className={styles["Youtube__Navbar--logo"]}>logo here</span>
      </div>
      <div className={styles["Youtube__Navbar__SearchBar"]}>
        <SearchBar />
      </div>
      <div className={styles["Youtube__Navbar__IconGroup"]}>
        <Popup
          position="bottom center"
          trigger={<Icon name="video" color="grey" size="large" />}
          content="Create new video or publication"
          inverted
        />
        <Popup
          position="bottom center"
          trigger={<Icon name="mail" color="grey" size="large" />}
          content="Messages"
          inverted
        />
        <Popup
          position="bottom center"
          trigger={<Icon name="bell" color="grey" size="large" />}
          content="Notifications"
          inverted
        />

        {user ? (
          <Dropdown
            pointing="top right"
            trigger={
              <Image
                src={user.avatar}
                alt="avatar"
                size="mini"
                circular
                verticalAlign="middle"
              />
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item as={Message}>
                <Comment.Group style={{ backgroundColor: "hsl(0%,0%,93.3%)" }}>
                  <Comment>
                    <Comment.Avatar src={user.avatar} />
                    <Comment.Content>
                      <Comment.Author as="a">{user.username}</Comment.Author>
                      <Comment.Text>{user.email}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name="user" color="grey" />
                My channel
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button fluid color="google plus" onClick={handleSocialLogin}>
            <Icon name="google" />
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleSocialLogin: PropTypes.func.isRequired,
  handleSidebarClick: PropTypes.func.isRequired
};

export default Navbar;
