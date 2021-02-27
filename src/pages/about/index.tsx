import TemplateMain from '@Templates/index';
import OrganismTeam from '@Section/web/team';
import { useTranslation } from '@Src/i18n';
import Seo from '@Utils/seo';
import I18n from '@Src/i18n';
import { GetStaticProps } from 'next';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo page="About" />
      <TemplateMain t={t}>
        <OrganismTeam t={t} />
      </TemplateMain>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['common'],
    },
  };
};
export default I18n.withTranslation(['common'])(AboutPage);
