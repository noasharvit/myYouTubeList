import React from 'react'

export default function youTubeIFrame({key, videoId}) {
    const str = videoId
    const enbedYT = "https://www.youtube.com/embed/"
  return (
    <div>
        <iframe id={key} type="text/html" width="320" height="180"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            src={`${enbedYT}${str}`}
            frameborder="0">
        </iframe>
    </div>
  )
}

