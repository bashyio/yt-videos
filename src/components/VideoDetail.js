import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe
        title="Video Player"
        width="100%"
        height="auto"
        src={videoSrc}
        style={{ minHeight: "450px" }}
      ></iframe>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
