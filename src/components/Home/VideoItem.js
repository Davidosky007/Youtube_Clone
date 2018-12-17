import React from "react";
import PropTypes from "prop-types";
import { Image, List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const VideoItem = ({ video, styles }) => {
  return (
    <div key={video.id} className={styles["Home__Container__Videos--video"]}>
      <Link to="/video">
        <Image
          fluid
          verticalAlign="middle"
          className={styles["Home__Container__Videos--thumbnail"]}
          src={video.urls.small}
        />
      </Link>

      <section>
        <Header
          className={styles["Home__Container__Videos--video-description"]}
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
              styles["Home__Container__Videos--video-description-content--item"]
            }
          >
            Channel name
          </List.Item>
          <List.Item
            className={
              styles["Home__Container__Videos--video-description-content--item"]
            }
          >
            593 mil visualizaciones
          </List.Item>
          <List.Item
            className={
              styles["Home__Container__Videos--video-description-content--item"]
            }
          >
            Hace 6 dias
          </List.Item>
        </List>
      </section>
    </div>
  );
};

VideoItem.propTypes = {};

export default VideoItem;
