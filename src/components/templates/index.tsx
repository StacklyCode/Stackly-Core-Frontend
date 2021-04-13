import styled from '@emotion/styled';
import OrganismsNavigation from '@Organisms/navegation';
import OrganismFooter from '@Organisms/footer';
 
import Seo from '@Utils/seo';

const Background = styled.main`
  height: max-content;
  width: 100%;
  margin-top: 90px;
`;

type ITemplate = {
  
  SeoTitle?: string;
  SeoPage?: string;
  SeoDesc?: string;
};

const TemplateMain: React.FC<ITemplate> = ({
  children,
  SeoTitle,
  SeoPage,
  SeoDesc,
}) => {
  return (
    <Background>
      <Seo title={SeoTitle} page={SeoPage} description={SeoDesc} />
      <OrganismsNavigation   />
      {children}
      <OrganismFooter   />
    </Background>
  );
};

export default TemplateMain;
