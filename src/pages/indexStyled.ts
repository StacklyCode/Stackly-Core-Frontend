import styled from '@emotion/styled';

export const IndexStyled = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7882b1;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  span {
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: 800;
    font-size: 80px;
    z-index: 10;
    color: #fafafa;
    -webkit-text-stroke: 2px #1a1a1a;
  }
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    video {
      min-width: 100%;
      min-height: 100%;

      width: auto;
      height: auto;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default IndexStyled;
