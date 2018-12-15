import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import styles from "./Navbar.module.css";

const Navbar = ({ handleSidebarClick }) => {
  return (
    <nav className={styles["Youtube__Navbar"]}>
      <div className={styles["Youtube__Navbar--sidebar"]}>
        <Icon
          onClick={this.props.handleSidebarClick}
          link
          color="grey"
          name="bars"
          size="large"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleSidebarClick: PropTypes.func.isRequired
};

export default Navbar;
