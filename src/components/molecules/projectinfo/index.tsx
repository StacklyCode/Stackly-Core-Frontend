import AtomBody from '@Atoms/body';
import AtomButton from '@Atoms/button';
import AtomImage from '@Atoms/image';
import AtomTitle from '@Atoms/title';
import styled from '@Styles/styled';

type ProjectInfoProps = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
};

const ProjectInfo = styled.div`
  margin: 30px 0px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.medium} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  ${({ theme }) => theme.mediaquery.medium} {
    margin: 0px 20px;
  }
  p {
    max-width: 280px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    ${({ theme }) => theme.mediaquery.medium} {
      text-align: left;
    }
  }
  h5 {
    text-align: center;
    ${({ theme }) => theme.mediaquery.medium} {
      text-align: left;
    }
  }
  button {
    margin-top: 20px;
    width: 200px;
    align-self: center;
    ${({ theme }) => theme.mediaquery.medium} {
      align-self: flex-start;
    }
  }
`;
const ContainerInfoTitle = styled.div`
  margin-top: 20px;
  ${({ theme }) => theme.mediaquery.medium} {
    margin-top: 0px;
  }
`;

const MoleculeProjectInfo: React.FC<ProjectInfoProps> = ({ urlImage, title, type, description, id }) => {
  return (
    <ProjectInfo>
      <AtomImage background image={urlImage} />
      <ContainerInfo>
        <ContainerInfoTitle>
          <AtomTitle align="left" bold size="SubTitleMedium">
            {title}
          </AtomTitle>
          <AtomTitle color="gray" align="left" size="SubTitleMedium">
            {type}
          </AtomTitle>
        </ContainerInfoTitle>
        <AtomBody color="gray" align="left" size="BodyMedium">
          {description}
        </AtomBody>
        <AtomButton outline link={`/projects/${id}`}>
          View project
        </AtomButton>
      </ContainerInfo>
    </ProjectInfo>
  );
};

export default MoleculeProjectInfo;
