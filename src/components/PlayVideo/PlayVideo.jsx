import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./PlayVideo.css";

const PlayVideo = (props) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  // window.addEventListener("orientationchange", function () {
  //   // Lấy trình phát video
  //   var player = videojs("my-video");
  //   // Cập nhật kích thước của trình phát video
  //   player.dimensions(window.innerWidth, window.innerHeight);
  // });
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoNode} id="my-video" className="video-js"></video>
    </div>
  );
};
export default PlayVideo;
