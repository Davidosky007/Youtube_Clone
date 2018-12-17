import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import styles from "./Home.module.css";
import axios from "axios";

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

  testApi = async e => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos?query=computer&per_page=20&client_id=b77c7cd6df3580867b24add6e769b1cf218ed705dbdfa683f99e96be5df17e03"
      );
      console.log(response);
      this.setState({ videos: response.data.results });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log(this.state.videos);
    return (
      <Container className={styles["Home__Container"]}>
        <button type="button" onClick={this.testApi}>
          Test images
        </button>
        <div className={styles["Home__Container__Videos"]}>
          {this.state.videos.map(image => (
            <Image
              fluid
              verticalAlign="middle"
              className={styles["Home__Container__Videos--thumbnail"]}
              key={image.id}
              src={image.urls.small}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default Home;
