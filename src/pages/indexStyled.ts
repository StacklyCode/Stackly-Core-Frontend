import styled from '@emotion/styled';

export const IndexStyledContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color: #2e384c;
      span {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 700;
        width: 300px;
        text-align: center;
        font-size: 20px;
        color: #fafafa;
        -webkit-text-stroke: 0px #1a1a1a;
      }
      img {
        width: 350px;
      }
      button {
        width: max-content;
        background-color: #fb5d64;
        color: white;
        padding: 15px 30px;
        border-radius: 4px;
        border: none;
        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        font-weight: 600;
        cursor: pointer;
      }
    }

    video {
      min-width: 100%;
      min-height: 100%;

      width: auto;
      height: auto;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
`;

export default IndexStyledContainer;
