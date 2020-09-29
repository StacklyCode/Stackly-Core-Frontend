import React, { createRef, useEffect } from 'react';
import IndexStyled from './indexStyled';

const Index: React.FC = () => {
  const videoReact = createRef<HTMLVideoElement>();
  useEffect(() => {
    if (videoReact.current) {
      videoReact.current.volume = 0.1;
    }
  });
  return (
    <IndexStyled>
      <span>We Are Working</span>
      <div>
        <video ref={videoReact} src="/videoloop.mp4" loop autoPlay>
          <track default kind="captions" />
          Sorry, your browser doesnt support embedded videos.
        </video>
      </div>
    </IndexStyled>
  );
};

export default Index;
