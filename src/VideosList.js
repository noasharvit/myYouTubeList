import React from 'react'
import Video from './Video'
import youTubeIFrame from './youTubeIFrame'
import YouTube from 'react-youtube'
import Carousel from 'react-material-ui-carousel' 
import { WhatsApp } from '@mui/icons-material'


export default function VideosList({videosId}) {
  const opts = {
    playerVars: {
      width: "100%",
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };
  if (videosId){

    return (
      <div className="VideoItem">
       <Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
         {videosId.map(videoId => 
            
           <YouTube
                 key={crypto.randomUUID()}
                 containerClassName="video-container"
                 className="iframe"
                 videoId={videoId}
                 rel="0"
                 opts={opts}
               />
           )}
       </Carousel>



     </div>
 
   )

  }

  
}





// videosId.map(video =>{
//   return <Video key={crypto.randomUUID()} video = {video}/>
// })
//return <youTubeIFrame key={crypto.randomUUID()} videoId = {videoId}/>}