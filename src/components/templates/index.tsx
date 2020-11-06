import styled from '@Styles/styled';

import OrganismsNavigation from '@Organisms/navegation';

const Background = styled.main`
  background: ${({ theme }) => theme.colors.white};
  height: max-content;
  width: 100%;
`;

const TemplateMain: React.FC = ({ children }) => {
  return (
    <Background>
      <OrganismsNavigation />
      {children}
    </Background>
  );
};

export default TemplateMain;
