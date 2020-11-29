import TemplateMain from '@Templates/index';
import OrganismCommunity from '@Organisms/community';
import { useTranslation } from '@Src/i18n';
import Seo from '@Src/components/utils/seo';

const CommunityPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo page="Community" />
      <TemplateMain t={t}>
        <OrganismCommunity t={t} />
      </TemplateMain>
    </>
  );
};

export default CommunityPage;
