import React from 'react';
import TemplateMain from '@Templates/index';
import OrganismAbout from '@Organisms/about';
import OrganismTeam from '@Organisms/team';
import { useTranslation } from '@Src/i18n';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <TemplateMain t={t}>
      <OrganismAbout t={t} />
      <OrganismTeam t={t} />
    </TemplateMain>
  );
};

export default AboutPage;
