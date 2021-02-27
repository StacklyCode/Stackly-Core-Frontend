import styled from '@emotion/styled';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import { Link } from 'react-scroll';
import { TFunction } from 'next-i18next';
import MoleculeCarrusel from '@Src/components/molecules/carrusel';

type IProject = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
  link?: string;
};

type ProjectsProps = {
  idScroll?: string;
  projects?: IProject[];
  t?: TFunction;
};

const Projects = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.base};
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ParagraphTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  h2 {
    max-width: 800px;
    padding: 0px 20px;
  }
  p {
    margin-top: 20px;
    padding: 0px 20px;
    max-width: 700px;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    flex-direction: row;
    align-items: baseline;
  }
  justify-content: center;
  margin-top: 10px;
  min-width: 220px;
  p {
    margin-top: 0px;
    margin-right: 10px;
    width: max-content;
  }
  a {
    :hover {
      cursor: pointer;
    }
  }
`;

const AllProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1150px;
  width: 100%;
  height: 280px;
  padding-bottom: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    margin: 20px 10px;
  }
  transition: all 2s ease;
`;

const ProjectsData: IProject[] = [
  {
    id: '0',
    title: 'Landing page for COMFECO',
    type: 'Web Landing',
    description: 'project-desc-1',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1611712445/StacklyCodeImages/comfeco_yzsm7k.png',
    link: 'https://www.comfeco.com/',
  },
  {
    id: '1',
    title: 'Landing page for CreaApps',
    type: 'Web | UI/UX',
    description: 'project-desc-2',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1604710707/StacklyCodeImages/project2_stlr9u.png',
    link: 'https://creaapps.com.do/',
  },
  {
    id: '2',
    title: 'Control Vehicular del Estado de Oaxaca',
    type: 'Web | CRM/Dashboard',
    description: 'project-desc-3',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1604981586/StacklyCodeImages/Project7_jyrxur.png',
    link: 'http://fgeo-control-vehicular.herokuapp.com/',
  },
  {
    id: '3',
    title: 'Gaceta Ucayalina',
    type: 'Web News Site',
    description: 'project-desc-4',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1604710669/StacklyCodeImages/project1_b4wzaz.png',
    link: 'https://www.gacetaucayalina.com/',
  },
  {
    id: '4',
    title: 'Landing page for Fazt Community',
    type: 'Web | UI/UX',
    description: 'project-desc-5',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1611715008/StacklyCodeImages/faztc_armkzj.png',
    link: 'https://faztcommunity.dev/',
  },
  {
    id: '5',
    title: 'Design MoveTv',
    type: 'Design | Redesign Web',
    description: 'project-desc-6',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1611715275/StacklyCodeImages/movetv_fd1xbv.png',
    link: 'https://www.figma.com/file/ALiyl4IfPtj9gRu15gfhqm/Untitled?node-id=0%3A1',
  },
  {
    id: '6',
    title: 'Design App Hotel',
    type: 'Design | Redesign Web',
    description: 'project-desc-7',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/v1611715791/StacklyCodeImages/app_hotel_design_uuyuoi.png',
    link: 'https://www.figma.com/file/IHaZUiMzMDtz0yTsCZWKaQGx/Untitled?node-id=92%3A2',
  },
];

const OrganismProjects: React.FC<ProjectsProps> = ({ idScroll, t }) => {
  return (
    <Projects id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between" fullwidth>
        <ProjectsContainer>
          <ParagraphTitle>
            <AtomTitle bold size="TitleMedium">
              {t && t('projects-title')}
            </AtomTitle>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t && t('projects-desc')}
            </AtomBody>
          </ParagraphTitle>
          <ParagraphContainer>
            <AtomBody size="BodyLarge" color="light">
              {t && t('projects-desc-button-1')}
            </AtomBody>
            <Link to="ContactScroll" smooth offset={-40}>
              <AtomBody color="accent" size="BodyLarge">
                {t && t('projects-desc-button-2')}
              </AtomBody>
            </Link>
          </ParagraphContainer>

          <AllProjectsContainer>
            <MoleculeCarrusel t={t} data={ProjectsData}></MoleculeCarrusel>
          </AllProjectsContainer>
        </ProjectsContainer>
      </AtomContainer>
    </Projects>
  );
};

export default OrganismProjects;
