import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Popup, Icon } from "semantic-ui-react";

const RightIcons = ({ iconsData }) =>
  iconsData.map(icon => {
    return (
      <Fragment>
        <Popup
          position="bottom center"
          trigger={
            <Icon
              className={icon.count && "Notification"}
              data-count={icon.count}
              name={icon.name}
              color="grey"
              size="large"
            />
          }
          content={icon.description}
          inverted
        />
      </Fragment>
    );
  });

RightIcons.propTypes = {
  iconsData: PropTypes.array
};

RightIcons.defaultProps = {
  iconsData: []
};

export default RightIcons;
