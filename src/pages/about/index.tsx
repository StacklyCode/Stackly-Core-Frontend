import React from 'react';
import TemplateMain from '@Templates/index';
import OrganismAbout from '@Organisms/about';
import OrganismTeam from '@Organisms/team';

const TestPage: React.FC = () => {
  return (
    <TemplateMain>
      <OrganismAbout />
      <OrganismTeam />
    </TemplateMain>
  );
};

export default TestPage;
