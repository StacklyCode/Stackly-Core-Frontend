import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import { Link } from "react-scroll";
import { TFunction } from "next-i18next";
import MoleculesTagProject from "@Src/components/molecules/tagprojects";

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

const ScrollProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: scroll;
`;

const AllProjectsContainer = styled.div`
  display: flex;
  align-self: baseline;
  width: max-content;
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    margin: 20px 10px;
  }
`;
const ButtonProject = styled.div`
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

type IProjectProps = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
  link?: string;
};

const ProjectsData: IProjectProps[] = [
  {
    id: "0",
    title: "Landing page for Amara",
    type: "Web | UI/UX",
    description: "project-desc-1",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604710707/StacklyCodeImages/project2_stlr9u.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "1",
    title: "Landing page for William",
    type: "Web | UI/UX",
    description: "project-desc-2",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604981586/StacklyCodeImages/Project7_jyrxur.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "2",
    title: "Landing page for Company",
    type: "Web | UI/UX",
    description: "project-desc-3",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604981587/StacklyCodeImages/Project6_knc2lj.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "3",
    title: "Landing page for Amara",
    type: "Web | UI/UX",
    description: "project-desc-4",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604711349/StacklyCodeImages/project5_w7xkti.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "4",
    title: "Landing page for Amara",
    type: "Web | UI/UX",
    description: "project-desc-5",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604711350/StacklyCodeImages/project3_h3911r.png",
    link: "https://www.google.com.mx",
  },
];

const OrganismProjects: React.FC<ProjectsProps> = ({ idScroll, t }) => {
  return (
    <Projects id={idScroll}>
      <AtomContainer
        alignItems="center"
        justifyContent="space-between"
        fullwidth
      >
        <ProjectsContainer>
          <ParagraphTitle>
            <AtomTitle bold size="TitleMedium">
              {t && t("projects-title")}
            </AtomTitle>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t && t("projects-desc")}
            </AtomBody>
          </ParagraphTitle>
          <ParagraphContainer>
            <AtomBody size="BodyLarge" color="light">
              {t && t("projects-desc-button-1")}
            </AtomBody>
            <Link to="ContactScroll" smooth offset={-40}>
              <AtomBody color="accent" size="BodyLarge">
                {t && t("projects-desc-button-2")}
              </AtomBody>
            </Link>
          </ParagraphContainer>

          <ScrollProjectsContainer>
            <AllProjectsContainer>
              {ProjectsData?.map((item) => (
                <MoleculesTagProject
                  key={item.id}
                  title={item.title}
                  img={item.urlImage}
                  type={item.type}
                  link={item.link}
                />
              ))}
            </AllProjectsContainer>
          </ScrollProjectsContainer>
        </ProjectsContainer>
      </AtomContainer>
    </Projects>
  );
};

export default OrganismProjects;
