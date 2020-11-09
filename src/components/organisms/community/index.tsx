import React from 'react';
import styled from '@Styles/styled';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import Lottie from 'react-lottie';
import animationData from '@Assets/json/animations/drawkit-grape-animation-5-LOOP.json';
import { useSpring, animated } from 'react-spring';
import AtomButton from '@Atoms/button';

const Community = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  margin-top: 110px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
`;

const IllustrationContainer = styled(animated.div)`
  width: 35%;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 60%;
  }

  h2 {
    margin-bottom: 20px;
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

type ICommunity = {
  idScroll?: string;
};

const OrganismCommunity: React.FC<ICommunity> = ({ idScroll }) => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateX(20px)' },
    from: { opacity: 0, transform: 'translateX(0px)' },
    delay: 700
  });
  const props2 = useSpring({
    to: { opacity: 1, transform: 'translateX(-20px)' },
    from: { opacity: 0, transform: 'translateX(0px)' },
    delay: 700
  });
  return (
    <Community id={idScroll}>
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer style={props}>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            Enter our community and develop your skills
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            Grow as a professional by sharing your knowledge with others and participating in open source
            projects.
          </AtomBody>
          <AtomButton href="https://discord.gg/jjMRrHguPf">Join Discord Community</AtomButton>
        </TextContainer>
        <IllustrationContainer style={props2}>
          <Lottie options={defaultOptions} />
        </IllustrationContainer>
      </AtomContainer>
    </Community>
  );
};

export default OrganismCommunity;