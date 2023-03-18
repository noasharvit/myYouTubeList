import React from 'react';
import YouTube from 'react-youtube';
import Carousel from 'react-material-ui-carousel';
import { Grid } from '@mui/material';
import Title from './Title';
import VideoDescription from './VideoDescription';
import './styles.css';
import VideoKeywords from './VideoKeywords';

export default function VideosCarousel({ videosId }) {
  const opts = {
    playerVars: {
      width: 400,
      height: 225,
      autoplay: 0,
      rel: 0,
    },
  };

  if (videosId) {
    return (
      <div>
        <Carousel className='MuiPaper-root.MuiCarouselItem-root' navButtonsAlwaysVisible={true} autoPlay={false}>
          {videosId.map((videoId) => (
            <Grid container spacing={24}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <div style={{ height: '225px', overflowY: 'auto' }}>
                  <Title content={'Video Description is: '} />
                  <VideoDescription videoId={videoId} />
                  <VideoKeywords videoId={videoId} /> 
                </div>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </div>
    );
  }
}
