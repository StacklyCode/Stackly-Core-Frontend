import styled from '@emotion/styled';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import AtomContainer from '@Atoms/container';
import AtomButton from '@Atoms/button';
import { useSpring, animated } from 'react-spring';
import { TFunction } from 'next-i18next';
import { Link } from 'react-scroll';

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 0px 0px;
  }
  div {
    position: relative;
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
  margin-bottom: 45px;
  p:first-of-type {
    margin-bottom: 5px;
  }
  h1 {
    margin-bottom: 10px;
  }
  p {
    max-width: 480px;
  }
`;
const IllustrationContainer = styled(animated.div)`
  position: absolute;
  overflow: hidden;
  left: 100px;
  width: 40%;
  height: 70vh;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
  }
  img:nth-of-type(2) {
    margin-left: 40px;
  }
  img {
    height: 100%;
    width: 300px;
    object-fit: cover;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
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

type IHero = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismHero: React.FC<IHero> = ({ idScroll, t }) => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(-20px)' },
    delay: 700,
  });
  const props2 = useSpring({
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(20px)' },
    delay: 700,
  });
  return (
    <Hero id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer style={props}>
          <AtomBody color="accent" align="left" size="BodyLarge" bold>
            Hispanic Software Company
          </AtomBody>
          <AtomTitle align="left" bold size="TitleLarge">
            {t && t('hero-title')}
          </AtomTitle>
          <AtomBody color="light" align="left" size="BodyLarge">
            {t && t('hero-desc')}
          </AtomBody>
          <ButtonContainer>
            <Link to="ContactScroll" smooth offset={-40}>
              <AtomButton>{t && t('hero-btn-1')}</AtomButton>
            </Link>
            <Link to="ProjectsScroll" smooth offset={-30}>
              <AtomButton outline>{t && t('hero-btn-2')}</AtomButton>
            </Link>
          </ButtonContainer>
        </TextContainer>
        <IllustrationContainer style={props2}>
          <img
            src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=300"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=300"
            alt=""
          />
        </IllustrationContainer>
      </AtomContainer>
    </Hero>
  );
};

export default OrganismHero;
