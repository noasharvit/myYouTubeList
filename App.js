
import React, {useState, useRef, useEffect} from "react";
import { setCookie, getCookie } from "./Cookies";
import VideosList from "./VideosList";


const USER_INFO = 'videosApp.userInfo'




function App() {

  const [videos, setVideos] = useState ([]);
  const videoFef = useRef()
  let userStorage = {UUID : '', VIDEOS_IDS : [] }

  useEffect(() => {
    if(getCookie(USER_INFO) === '') {
      userStorage.UUID = crypto.randomUUID();
      userStorage.VIDEOS_IDS = [];
      setCookie(USER_INFO,JSON.stringify(userStorage), 365 )
    }

    
    let cookieOfUserInfo = getCookie(USER_INFO);
    const cookieOfUserInfoParsed = JSON.parse(cookieOfUserInfo)
    if (cookieOfUserInfoParsed !== undefined) console.log("cookies user info is "+ cookieOfUserInfoParsed.UUID)
    if(cookieOfUserInfoParsed.VIDEOS_IDS.length) setVideos(cookieOfUserInfoParsed.VIDEOS_IDS)
  },[])

  

  function handleAddVideo(e) {
    const name = videoFef.current.value
    if (name === '') return 
    
    setVideos(prevVideo => {
      userStorage.VIDEOS_IDS = [...prevVideo, name];
      setCookie(USER_INFO,JSON.stringify(userStorage), 365 )
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
