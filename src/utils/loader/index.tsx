import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const LoaderAnimation = keyframes`
   @keyframes loader {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
 
 `;

const LoaderBackground = styled.div`
  width: '100%';
  height: '100vh';
  display: 'inline-block';
  background: ${() => '#162C5B'};
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  .loader div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${LoaderAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .loader div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const Loader = () => {
  new PerformanceObserver((entryList) => {
    entryList.getEntries().map((el) => console.log(el));
  });

  return (
    <LoaderBackground>
      <LoaderContainer>
        <div></div>
        <div></div>
      </LoaderContainer>
    </LoaderBackground>
  );
};
