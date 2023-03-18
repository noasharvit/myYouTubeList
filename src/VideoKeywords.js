
import React, { useState, useEffect } from 'react';
import Title from './Title';

export default function VideoKeywords({ videoId }) {
  const [keywords, setKeywords] = useState([]);
  const API_KEY= 'AIzaSyB03HR8JLBwLyGAYyth3IHyRs2KWs7paOQ';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`);
        const data = await response.json();
        setKeywords(data.items[0].snippet.tags);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <div>
      {keywords && keywords.length > 0 && (
        <div>
          <Title content={"Keywords:"}/>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
