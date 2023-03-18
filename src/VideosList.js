import React from 'react'
import YouTube from 'react-youtube'
import Carousel from 'react-material-ui-carousel' 
import { Grid } from '@mui/material'
import Title from './Title'
import VideoDescription from './VideoDescription'
import "./styles.css";

export default function VideosList({videosId}) {
  const opts = {
    playerVars: {
      width: 400, height: 225,
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0
    }
  };
  if (videosId){

    return (
      <div>
       <Carousel navButtonsAlwaysVisible={true} autoPlay={false} >
         {videosId.map(videoId => 
            <Grid container spacing={24}   >

              <Grid item xs={6} >
                <div>
                <YouTube
                  key={crypto.randomUUID()}
                  className="iframe"
                  videoId={videoId}
                  rel="0"
                  opts={opts}
                />
                </div>
              </Grid>
              <Grid item xs={6} >
                <Title content ={"Video Description is: "}/>
                <VideoDescription videoId={videoId}/>
              </Grid>
              
            </Grid>
           
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


{/* <YouTube
                  style = {{width: 30, height: 30} }
                  key={crypto.randomUUID()}
                  containerClassName="video-container"
                  className="YouTube"
                  videoId={videoId}
                  rel="0"
                  opts={opts}
                /> */}