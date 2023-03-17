
import React, {useState, useRef, useEffect} from "react";
import { initCookie,parseCookie, addVideosToCurrentCookie  } from "./Cookies";
import VideosList from "./VideosList";


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
    
    setVideos(prevVideo => {
      addVideosToCurrentCookie(prevVideo, name)
      return [...prevVideo, name];
    })
    videoFef.current.value = null
  }


  return (
    <>
    <div>My favorite youtube videos:</div>
    <input ref ={videoFef} type="text" />
    <button onClick={handleAddVideo}>Add a video to the list</button>
    <VideosList videos = {videos} />
    </>
    
  );
}

export default App;
