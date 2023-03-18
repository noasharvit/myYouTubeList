import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import Title from './Title';

export default function VideoDescription({ videoId }) {
  const API_KEY= 'AIzaSyB03HR8JLBwLyGAYyth3IHyRs2KWs7paOQ';
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`)
      .then(response => response.json())
      .then(data => {
        const videoDescription = data.items[0].snippet.description;
        setDescription(videoDescription);
      })
      .catch(error => {
        console.error(error);
      });
  }, [videoId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" startIcon={<InfoIcon />} onClick={handleOpen}>
        open description modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={{ padding: '1rem', backgroundColor: '#fff', maxHeight: '80vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <Typography variant="h6" gutterBottom>
            <Title content={"Video Description"}/>
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          {description.split('\n').map((line, index) => (
            <Typography key={index} paragraph>
              {line}
            </Typography>
          ))}
        </div>
      </Modal>
    </div>
  );
}
