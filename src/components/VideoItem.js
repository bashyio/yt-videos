import React from "react";
import styles from "./VideoItem.module.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className={`video-item item ${styles.videoItem}`}
      onClick={() => onVideoSelect(video)}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className={`header ${styles.header}`}>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
