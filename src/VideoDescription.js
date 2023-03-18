import React, { useState, useEffect } from 'react';

export default function VideoDescription({ videoId }) {
  const API_KEY= 'AIzaSyB03HR8JLBwLyGAYyth3IHyRs2KWs7paOQ';
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`)
      .then(response => response.json())
      .then(data => {
        const videoDescription = data.items[0].snippet.description;
        const firstThreeSentences = extractSentences(videoDescription, 3);
        setDescription(firstThreeSentences);
      })
      .catch(error => {
        console.error(error);
      });
  }, [videoId]);

  
  function extractSentences(str, n) {
    const sentences = str.split(/[\.\?!]/);
    const firstThreeSentences = sentences.slice(0, n).join('. ');
    return firstThreeSentences;
  }

  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
