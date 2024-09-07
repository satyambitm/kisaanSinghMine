import React from 'react';
import './videoPlayer.css';
import video from '../../assets/edusity_assets/video.mp4';

const VideoPlayer = () => {
  return (
    <div className='video-player hide'>
        <h3>Video</h3>
        <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
