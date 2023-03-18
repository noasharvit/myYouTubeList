
import React, {useState, useRef, useEffect} from "react";
import Title from "./Title";
import { initCookie,parseCookie, addVideosToCurrentCookie  } from "./Cookies";
import VideosList from "./VideosList";
import { youtube_parser } from "./youTube";
import "./styles.css";

export const USER_INFO = 'videosApp.userInfo'
export const UUID = 'UUID'



function App() {

  const [videos, setVideos] = useState ([]);
  const videoFef = useRef()



  useEffect(() => {
    initCookie()
    const cookieOfUserInfoParsed = parseCookie()
    if (cookieOfUserInfoParsed !== undefined && cookieOfUserInfoParsed.VIDEOS_IDS.length) {
      console.log("cookies user info is "+ cookieOfUserInfoParsed.UUID)
      setVideos(cookieOfUserInfoParsed.VIDEOS_IDS)
    }
  },[])

  function handleAddVideo(e) {
    const name = videoFef.current.value
    if (name === '') return 
    const videoId = youtube_parser(name);
    
    if(!videoId){
      alert("invalid url");
      videoFef.current.value = null
      return
    }

    setVideos(prevVideo => {
      addVideosToCurrentCookie(prevVideo, videoId)
      return [...prevVideo, videoId];
    })
    videoFef.current.value = null
  }

  
  return (
    <div style={{padding: '10px'}}>
      <div>
    <Title content ={"My favorite youtube videos:"}></Title>
    <input ref ={videoFef} type="text" 
            style={{ border: '2px solid palevioletred', borderRadius: '3px'}} />
    <button onClick={handleAddVideo}
            style={{ color: 'palevioletred', background: 'white' ,
            border: '2px solid palevioletred',
            borderRadius: '3px'}}>
      Add a video to the list
    </button>
    </div>
    <div className = "VideoItem" style={{padding: '10px'}}>
    {videos.length === 0? <Title content ={"no videos in playlist yet"}></Title> : <VideosList videosId = {videos} />}
    
    </div>
    </div>
    
  );
}

export default App;

//{youTubeIFrame('Xt7roadoup8')}