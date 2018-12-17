import React, { Component } from "react";

class UserChannel extends Component {
  render() {
    console.log(this.props.match.params.userId);
    return <div>user channel</div>;
  }
}

export default UserChannel;
