import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, styles }) => {
  return (
    <div className={styles["Home__Container__Videos"]}>
      {videos.map(video => (
        <VideoItem key={video.id} video={video} styles={styles} />
      ))}
    </div>
  );
};

VideoList.propTypes = {};

export default VideoList;
