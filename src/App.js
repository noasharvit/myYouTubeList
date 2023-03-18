import React, { useState, useRef, useEffect } from "react";
import Title from "./Title";
import { initCookie, parseCookie, addVideosToCurrentCookie } from "./Cookies";
import VideosCarousel from "./VideosCarousel";
import { youtube_parser } from "./youTube";
import "./styles.css";

export const USER_INFO = "videosApp.userInfo";
export const UUID = "UUID";

function App() {
  const [videos, setVideos] = useState([]);
  const videoRef = useRef();

  useEffect(() => {
    initCookie();
    const cookieOfUserInfoParsed = parseCookie();
    if (cookieOfUserInfoParsed?.VIDEOS_IDS?.length) {
      console.log("cookies user info is " + cookieOfUserInfoParsed.UUID);
      setVideos(cookieOfUserInfoParsed.VIDEOS_IDS);
    }
  }, []);

  function handleAddVideo() {
    const name = videoRef.current.value;
    if (name === "") return;

    const videoId = youtube_parser(name);

    if (!videoId) {
      alert("Invalid URL");
      videoRef.current.value = null;
      return;
    }

    addVideo(videoId);
    videoRef.current.value = null;
  }

  function addVideo(videoId) {
    setVideos((prevVideo) => {
      addVideosToCurrentCookie(prevVideo, videoId);
      return [...prevVideo, videoId];
    });
  }

  return (
    <div style={{ padding: "10px" }}>
      <div>
        <Title content={"My favorite youtube videos:"} />
        <input
          ref={videoRef}
          type="text"
          style={{
            border: "2px solid #0066CC",
            borderRadius: "3px",
          }}
        />
        <button
          onClick={handleAddVideo}
          style={{
            color: "#0066CC",
            background: "white",
            border: "2px solid #0066CC",
            borderRadius: "3px",
          }}
        >
          Add a video to the list
        </button>
      </div>
      <section className="video-list" style={{ padding: "10px" }}>
        {videos.length === 0 ? (
          <Title content={"No videos in playlist yet"} />
        ) : (
          <VideosCarousel videosId={videos} />
        )}
      </section>
    </div>
  );
}

export default App;
