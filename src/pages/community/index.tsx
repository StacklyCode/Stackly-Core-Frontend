import React from 'react';
import TemplateMain from '@Templates/index';
import OrganismCommunity from '@Organisms/community';
import { useTranslation } from '@Src/i18n';

const CommunityPage = () => {
  const { t } = useTranslation();
  return (
    <TemplateMain t={t}>
      <OrganismCommunity t={t} />
    </TemplateMain>
  );
};

export default CommunityPage;
