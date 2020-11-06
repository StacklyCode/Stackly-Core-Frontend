import styled from '@Styles/styled';
import AtomContainer from '@Atoms/container';
import IllustrationHero from '@Assets/img/illustration-contact.svg';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import AtomButton from '@Atoms/button';
import AtomInput from '@Atoms/input';

const Contact = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  background-image: url('/assets/img/background2.svg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 80px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const IllustrationContainer = styled.div`
  width: 30%;
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

const TextContainer = styled.div`
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
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  div:nth-last-of-type(1) {
    height: 10px;
  }
  div {
    width: 100%;
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  button {
    align-self: center;
    width: 200px;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 15px;
  }
`;
const FormLeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    flex-direction: row;
    justify-content: space-between;
  }
  width: 100%;
  div {
    width: 100%;

    ${({ theme }) => theme.mediaquery.extrasmall} {
      width: 48%;
    }
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

const OrganismContact: React.FC = () => {
  return (
    <Contact>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="white">
            Let’s work together and bring your idea to life.
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            These are a collection of projects we have worked so far. We’ll work with you side by side to
            bring your idea to life.
          </AtomBody>
          <FormContainer action="https://formspree.io/f/xqkgbjoa" method="POST">
            <FormLeftContainer>
              <AtomInput id="name" margin={['15px', '0px']} placeholder="Your Name" />
              <AtomInput id="Subject" margin={['15px', '0px']} placeholder="Subject" />
            </FormLeftContainer>
            <AtomInput id="email" type="email" margin={['15px', '0px']} placeholder="Your Email" />
            <AtomInput
              id="message"
              margin={['15px', '0px']}
              placeholder="Type Menssage Here..."
              type="text"
            />
            <AtomButton type="submit" color="primary">
              Send
            </AtomButton>
          </FormContainer>
        </TextContainer>
        <IllustrationContainer>
          <IllustrationHero />
        </IllustrationContainer>
      </AtomContainer>
    </Contact>
  );
};

export default OrganismContact;
