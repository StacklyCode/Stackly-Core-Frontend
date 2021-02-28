import styled from '@emotion/styled';
import OrganismsNavigation from '@Organisms/navegation';
import OrganismFooter from '@Organisms/footer';
import { TFunction } from 'next-i18next';
import Seo from '@Utils/seo';

const Background = styled.main`
  height: max-content;
  width: 100%;
  margin-top: 90px;
`;

type ITemplate = {
  t?: TFunction;
  SeoTitle?: string;
  SeoPage?: string;
  SeoDesc?: string;
};

const TemplateMain: React.FC<ITemplate> = ({
  children,
  t,
  SeoTitle,
  SeoPage,
  SeoDesc,
}) => {
  return (
    <Background>
      <Seo title={SeoTitle} page={SeoPage} description={SeoDesc} />
      <OrganismsNavigation t={t} />
      {children}
      <OrganismFooter t={t} />
    </Background>
  );
};

export default TemplateMain;
