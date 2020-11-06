import styled from '@Styles/styled';
import IllustrationHero from '@Assets/img/illustration-hero.svg';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import AtomContainer from '@Atoms/container';
import AtomButton from '@Atoms/button';

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

const TextContainer = styled.div`
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
const IllustrationContainer = styled.div`
  width: 35%;
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

const OrganismHero: React.FC = () => {
  return (
    <Hero>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
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
        <IllustrationContainer>
          <IllustrationHero />
        </IllustrationContainer>
      </AtomContainer>
    </Hero>
  );
};

export default OrganismHero;
