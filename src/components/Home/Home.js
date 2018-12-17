import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { firebaseModules } from "../../configuration/firebase";
import styles from "./Home.module.css";
import VideoList from "./VideoList";

class Home extends Component {
  state = { videos: [] };

  componentDidMount() {
    firebaseModules.database
      .ref("videos")
      .orderByKey()
      .limitToLast(20)
      .on("value", snapshot => {
        const videosFromDB = [];

        snapshot.forEach(data => {
          const videoData = data.val();
          videoData["key"] = data.key;
          videosFromDB.push(videoData);
        });
        this.setState({ videos: videosFromDB });
      });
  }

  render() {
    console.log(this.state.videos);
    return (
      <Container className={styles["Home__Container"]}>
        <VideoList styles={styles} videos={this.state.videos} />
      </Container>
    );
  }
}

export default Home;
