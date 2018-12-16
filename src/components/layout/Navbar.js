import React from "react";
import PropTypes from "prop-types";
import { Icon, Dropdown, Image } from "semantic-ui-react";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import ProfileImage from "../../assets/images/profile_image.png";

const Navbar = ({ handleSidebarClick }) => {
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
        <span style={{ color: "black", marginLeft: "1em" }}>logo here</span>
      </div>
      <div className={styles["Youtube__Navbar__SearchBar"]}>
        <SearchBar />
      </div>
      <div className={styles["Youtube__Navbar__IconGroup"]}>
        <Icon name="mail" color="grey" size="large" />
        <Icon name="bell" color="grey" size="large" />
        <Dropdown
          pointing="top right"
          trigger={
            <Image
              src={ProfileImage}
              alt="avatar"
              size="mini"
              circular
              verticalAlign="middle"
            />
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item text="Home" />>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleSidebarClick: PropTypes.func.isRequired
};

export default Navbar;
