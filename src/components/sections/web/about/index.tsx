import styled from '@emotion/styled';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import { useSpring, animated } from 'react-spring';
import { TFunction } from 'next-i18next';

const About = styled.section`
  display: flex;
  margin-top: 110px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  margin: 50px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    max-width: 900px;
    margin-bottom: 20px;
  }
  p {
    max-width: 900px;
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`;

type IAbout = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismAbout: React.FC<IAbout> = ({ idScroll, t }) => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(-20px)' },
    delay: 700,
  });

  return (
    <About id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer style={props}>
          <AtomTitle align="center" bold size="TitleMedium">
            {t && t('about-title')}
          </AtomTitle>
          <AtomBody align="center" size="BodyLarge" color="light">
            {t && t('about-desc')}
          </AtomBody>
        </TextContainer>
      </AtomContainer>
    </About>
  );
};

export default OrganismAbout;
