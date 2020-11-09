import AtomBody from '@Atoms/body';
import AtomContainer from '@Atoms/container';
import AtomIcon from '@Atoms/icon';
import styled from '@Styles/styled';

type FooterProps = {
  title?: string;
};

const Footer = styled.div<FooterProps>`
  width: 100vw;
  min-height: 110px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const FooterContainer = styled.div<FooterProps>`
  width: 100%;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    flex-direction: row;
    justify-content: space-between;
    margin: 00px 0px;
  }
  p {
    display: none;
    width: 358.47px;
    ${({ theme }) => theme.mediaquery.large} {
      display: flex;
    }
  }
  svg {
    display: flex;
  }
`;
const FooterSocialContainer = styled.div<FooterProps>`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    width: 25px;
    margin-right: 30px;
  }
  a:nth-last-of-type(1) {
    margin-right: 0px;
  }
`;

const OrganismFooter: React.FC<FooterProps> = () => {
  return (
    <Footer>
      <AtomContainer alignItems="center" justifyContent="center">
        <FooterContainer>
          <AtomIcon icon="stacklycodelogo" />
          <AtomBody size="BodyMedium">
            All Rights Reserved. The contents of all material available on this Internet site are copyrighted
          </AtomBody>
          <FooterSocialContainer>
            <a href="https://www.facebook.com/StacklyCodeOfficial">
              <AtomIcon icon="facebook" />
            </a>
            <a href="https://www.linkedin.com/company/68642625/admin/">
              <AtomIcon icon="linkedin" />
            </a>
            <a href="https://github.com/StacklyCode">
              <AtomIcon icon="github" />
            </a>
            <a href="https://twitter.com/StacklyCode">
              <AtomIcon icon="twitter" />
            </a>
          </FooterSocialContainer>
        </FooterContainer>
      </AtomContainer>
    </Footer>
  );
};

export default OrganismFooter;