import styled from '@Styles/styled';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import MoleculeProjectInfo from '@Molecules/projectinfo';
import AtomImage from '@Atoms/image';
import { useState } from 'react';
import { Link } from 'react-scroll';

type IProject = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
};

type ProjectsProps = {
  idScroll?: string;
  projects?: IProject[];
};

const Projects = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow-x: hidden;
`;
const ParagraphTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  h2 {
    max-width: 700px;
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
`;

const ScrollProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  justify-content: flex-start;
  margin-left: 50px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.base};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent.blue.light};
  }
`;

const AllProjectsContainer = styled.div`
  display: flex;
  align-self: baseline;
  width: max-content;
  button {
    margin: 20px 10px;
  }
`;
const ButtonProject = styled.button`
  border: none;
  cursor: pointer;
`;

const OrganismProjects: React.FC<ProjectsProps> = ({ idScroll, projects }) => {
  const [projectID, setProjectID] = useState<IProject | undefined>({});
  return (
    <Projects id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between" fullwidth>
        <ProjectsContainer>
          <ParagraphTitle>
            <AtomTitle bold size="TitleMedium">
              We don’t just build. We provide value for your business.
            </AtomTitle>
            <AtomBody size="BodyExtraLarge" color="gray">
              These are a collection of projects we have worked so far. We’ll work with you side by side to
              bring your idea to life.
            </AtomBody>
          </ParagraphTitle>
          <ParagraphContainer>
            <AtomBody size="BodyLarge">Ready to start your project ?</AtomBody>
            <Link to="ContactScroll" smooth offset={-40}>
              <AtomBody color="green" size="BodyLarge">
                Let’s work together.
              </AtomBody>
            </Link>
          </ParagraphContainer>
          <MoleculeProjectInfo
            title={projectID?.title || (projects && projects[0].title)}
            urlImage={projectID?.urlImage || (projects && projects[0].urlImage)}
            type={projectID?.type || (projects && projects[0].type)}
            description={projectID?.description || (projects && projects[0].description)}
            id={projectID?.id || (projects && projects[0].id)}
          />
          <AtomBody size="BodySmall" color="gray">
            Click on the image to see the next project
          </AtomBody>
          <ScrollProjectsContainer>
            <AllProjectsContainer>
              {projects?.map((item) => (
                <ButtonProject
                  key={item.id}
                  id={item.id}
                  onClick={(e) =>
                    setProjectID(projects.find((itemFind) => itemFind.id === e.currentTarget.id))
                  }
                >
                  <AtomImage image={item.urlImage} />
                </ButtonProject>
              ))}
            </AllProjectsContainer>
          </ScrollProjectsContainer>
        </ProjectsContainer>
      </AtomContainer>
    </Projects>
  );
};

export default OrganismProjects;
