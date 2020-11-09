import styled from '@Styles/styled';
import OrganismsNavigation from '@Organisms/navegation';
import OrganismFooter from '@Organisms/footer';

const Background = styled.main`
  height: max-content;
  width: 100%;
`;

const TemplateMain: React.FC = ({ children }) => {
  return (
    <Background>
      <OrganismsNavigation />
      {children}
      <OrganismFooter />
    </Background>
  );
};

export default TemplateMain;
