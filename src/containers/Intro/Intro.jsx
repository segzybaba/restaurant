import React, { useState } from 'react';
import './intro.css';
import { images, meal } from '../../constants';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';

function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      ></video>
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo ? (
            <img src={pause} alt='pause' cl />
          ) : (
            <img src={play} alt='play' />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
