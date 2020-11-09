import styled from '@Styles/styled';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import AtomContainer from '@Atoms/container';
import AtomButton from '@Atoms/button';
import Lottie from 'react-lottie';
import animationData from '@Assets/json/animations/drawkit-grape-animation-4-LOOP.json';
import { useSpring, animated } from 'react-spring';

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 0px 0px;
  }
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 50%;
  }
  margin-bottom: 55px;
  h1 {
    margin-bottom: 20px;
  }
`;
const IllustrationContainer = styled(animated.div)`
  width: 40%;
  margin-bottom: 55px;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    margin-top: 15px;
    margin-left: 0px;
    justify-content: flex-start;
  }
  button {
    margin: 10px 20px;
    @media screen and (max-width: 570px) {
      margin: 10px 20px;
    }
    ${({ theme }) => theme.mediaquery.small} {
      margin-left: 0px;
      margin-right: 30px;
    }
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

type IHero = {
  idScroll?: string;
};

const OrganismHero: React.FC<IHero> = ({ idScroll }) => {
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
    <Hero id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer style={props}>
          <AtomTitle align="left" bold size="TitleLarge">
            We create the right solution for your business.
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge">
            We will be in charge to bring your idea to life and give the best value for your users.
          </AtomBody>
          <ButtonContainer>
            <AtomButton color="primary">Let’s start a project</AtomButton>
            <AtomButton outline>View our catalog</AtomButton>
          </ButtonContainer>
        </TextContainer>
        <IllustrationContainer style={props2}>
          <Lottie options={defaultOptions} />
        </IllustrationContainer>
      </AtomContainer>
    </Hero>
  );
};

export default OrganismHero;
