import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, List, Header } from "semantic-ui-react";
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
            <div
              key={image.id}
              className={styles["Home__Container__Videos--video"]}
            >
              <Link to="/video">
                <Image
                  fluid
                  verticalAlign="middle"
                  className={styles["Home__Container__Videos--thumbnail"]}
                  src={image.urls.small}
                />
              </Link>

              <section>
                <Header
                  className={
                    styles["Home__Container__Videos--video-description"]
                  }
                  as="h3"
                >
                  <Link to="/video">titulito del video - 900 subs</Link>
                </Header>
                <List
                  className={
                    styles["Home__Container__Videos--video-description-content"]
                  }
                >
                  <List.Item
                    className={
                      styles[
                        "Home__Container__Videos--video-description-content--item"
                      ]
                    }
                  >
                    Channel name
                  </List.Item>
                  <List.Item>593 mil visualizaciones</List.Item>
                  <List.Item>Hace 6 dias</List.Item>
                </List>
              </section>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default Home;
