import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import styles from "./Home.module.css";
import VideoList from "./VideoList";
// const videos = [
//   {
//     thumbnail: "",
//     title: "",
//     user: "",
//     channel: "",
//     visualization: 0,
//     createdAt: "",
//     duration: 0,
//     likes: 0,
//     dislikes: 0,
//     description: "",
//     category: "",
//     comments: ""
//   }
// ];

class Home extends Component {
  state = { videos: [] };

  componentDidMount() {}

  render() {
    return (
      <Container className={styles["Home__Container"]}>
        <VideoList styles={styles} videos={this.state.videos} />
      </Container>
    );
  }
}

export default Home;
