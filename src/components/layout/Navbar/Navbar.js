import React from "react";
import PropTypes from "prop-types";
import { Icon, Button } from "semantic-ui-react";
import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
import UserDropdown from "./UserDropdown";

const Navbar = ({
  handleSignOut,
  handleSocialLogin,
  handleSidebarClick,
  user
}) => {
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
        <NavbarIcons
          iconsData={[
            { name: "video", description: "Create new video or publication" },
            { name: "mail", description: "Messages" },
            { name: "bell", description: "Notifications", count: 0 }
          ]}
        />

        {user ? (
          <UserDropdown user={user} handleSignOut={handleSignOut} />
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
  handleSignOut: PropTypes.func.isRequired,
  handleSidebarClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    public: PropTypes.number
  })
};

export default Navbar;
