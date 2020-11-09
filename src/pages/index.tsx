import React from 'react';
import TemplateMain from '@Templates/index';
import OrganismHero from '@Organisms/hero';
import OrganismServices from '@Organisms/services';
import OrganismProjects from '@Organisms/projects';
import OrganismClients from '@Organisms/clients';
import OrganismContact from '@Organisms/contact';

type IProject = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
};
const ProjectsDataFake: IProject[] = [
  {
    id: '0',
    title: 'Landing page for Amara',
    type: 'Web | UI/UX',
    description:
      'We delivered a nice looking and well crafted user experience for Amara’s website, to bring customers to their platform for flower services and increasing their user’s traffic and sells',
    urlImage: 'https://miro.medium.com/max/1600/1*TtM37P6qF7JcvFdpfIICgQ.png'
  },
  {
    id: '1',
    title: 'Landing page for William',
    type: 'Web | UI/UX',
    description:
      'We delivered a nice looking and well crafted user experience for Amara’s website, to bring customers to their platform for flower services and increasing their user’s traffic and sells',
    urlImage: 'https://miro.medium.com/max/700/1*uxDIyeyeeAQcfcvz6GzCGw.png'
  },
  {
    id: '2',
    title: 'Landing page for Company',
    type: 'Web | UI/UX',
    description:
      'We delivered a nice looking and well crafted user experience for Amara’s website, to bring customers to their platform for flower services and increasing their user’s traffic and sells',
    urlImage: 'https://miro.medium.com/max/700/1*8MBh4AmUhMqEKWOO_5AeQw.png'
  },
  {
    id: '3',
    title: 'Landing page for Amara',
    type: 'Web | UI/UX',
    description:
      'We delivered a nice looking and well crafted user experience for Amara’s website, to bring customers to their platform for flower services and increasing their user’s traffic and sells',
    urlImage: 'https://miro.medium.com/max/700/1*Nu-FIla1yFxUVut6in9zrg.png'
  },
  {
    id: '4',
    title: 'Landing page for Amara',
    type: 'Web | UI/UX',
    description:
      'We delivered a nice looking and well crafted user experience for Amara’s website, to bring customers to their platform for flower services and increasing their user’s traffic and sells',
    urlImage: 'https://miro.medium.com/max/700/1*n1hYjKwLMrndUOcB568MbA.png'
  }
];

const TestPage: React.FC = () => {
  return (
    <TemplateMain>
      <OrganismHero idScroll="HeroScroll" />
      <OrganismServices idScroll="ServicesScroll" />
      <OrganismProjects idScroll="ProjectsScroll" projects={ProjectsDataFake} />
      <OrganismClients idScroll="ClientsScroll" />
      <OrganismContact idScroll="ContactScroll" />
    </TemplateMain>
  );
};

export default TestPage;
