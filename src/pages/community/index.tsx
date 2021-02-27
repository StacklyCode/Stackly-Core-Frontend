import TemplateMain from '@Templates/index';
import OrganismCommunity from '@Organisms/community';
import { useTranslation } from '@Src/i18n';
import I18n from '@Src/i18n';
import { GetStaticProps } from 'next';

const CommunityPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TemplateMain t={t}>
        <OrganismCommunity t={t} />
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

export default I18n.withTranslation(['common'])(CommunityPage);
