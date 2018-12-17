import React from "react";
import { Image, List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

const VideoItem = ({ video, styles }) => {
  return (
    <div key={video.id} className={styles["Home__Container__Videos--video"]}>
      <Link to={`/video/${video.key}`}>
        <Image
          fluid
          verticalAlign="middle"
          className={styles["Home__Container__Videos--thumbnail"]}
          src={video.thumbnail} //TODO - COGER URL DE BASE DATOS
        />
      </Link>

      <section>
        <Header
          className={styles["Home__Container__Videos--video-description"]}
          as="h3"
        >
          <Link to={`/video/${video.key}`}>{video.title}</Link>
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
            {video.visualizations} visualizations
          </List.Item>
          <List.Item
            className={
              styles["Home__Container__Videos--video-description-content--item"]
            }
          >
            {moment(video.createdAt).fromNow()}
          </List.Item>
        </List>
      </section>
    </div>
  );
};

export default VideoItem;
