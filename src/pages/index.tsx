import React, { createRef, useState } from 'react';
import IndexContainer from './indexStyled';

const Index: React.FC = () => {
  const videoReact = createRef<HTMLVideoElement>();
  const [showVideo, useShowVideo] = useState(false);
  const showVideoFunc = () => {
    useShowVideo(true);
    if (videoReact.current) {
      videoReact.current.volume = 0.1;
      videoReact.current.play();
    }
  };
  return (
    <IndexContainer>
      {showVideo ? <span>We Are Working</span> : null}
      <div>
        {!showVideo ? (
          <div>
            <img src="/logo.svg" alt="Logo" />

            <button type="button" onClick={showVideoFunc}>
              Enter
            </button>
          </div>
        ) : null}

        {showVideo ? (
          <video ref={videoReact} src="/videoloop.mp4" loop autoPlay>
            <track default kind="captions" />
            Sorry, your browser doesnt support embedded videos.
          </video>
        ) : null}
      </div>
    </IndexContainer>
  );
};

export default Index;
