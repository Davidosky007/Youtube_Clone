import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const SearchBar = props => {
  return (
    <Input
      fluid
      focus
      action={{ icon: "search" }}
      type="search"
      placeholder="Search videos around the world"
    />
  );
};

SearchBar.propTypes = {};

export default SearchBar;
