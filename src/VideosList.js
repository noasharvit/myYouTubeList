import React from 'react'
import Video from './Video'

export default function VideosList({videos}) {
  return (
    videos.map(video =>{
        return <Video key={crypto.randomUUID()} video = {video}/>
    })
  )
}
