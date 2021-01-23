import AtomBody from "@Atoms/body";
import AtomTitle from "@Atoms/title";
import styled from "@emotion/styled";
import AtomButton from "@Src/components/atoms/button";

type TagsProps = {
  img?: string;
  type?: string;
  title?: string;
  link?: string;
  description?: string;
};

const Tags = styled.article<TagsProps>`
  width: 240px;
  height: max-content;
  margin-left: 10px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.base};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    img {
      filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));
    }
    div {
      height: max-content;
      opacity: 1;
      p {
      }
      button {
      }
    }
  }
  span {
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
  }
  transition: all 0.3s ease;
`;

const TagImage = styled.img<TagsProps>`
  width: 100%;
  height: 100px;
  object-fit: cover;
  transition: all 0.3s ease;
`;
const TagDescContainer = styled.div<TagsProps>`
  margin-top: 5px;
  width: 100%;
  overflow: hidden;
  height: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
  }
  button {
    margin: 20px 0;
  }
  transition: all 0.6s ease;
`;

const MoleculesTagProject: React.FC<TagsProps> = ({
  img,
  type,
  title,
  link,
  description,
}) => {
  return (
    <Tags>
      <TagImage
        src={
          img ||
          "https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5f86270f93330c1ddd36c821_best-website-gallery.jpg"
        }
      />
      <AtomTitle
        align="left"
        as="span"
        size="SubTitleMedium"
        color="black"
        bold
      >
        {title || "Some Title"}
      </AtomTitle>
      <AtomBody align="left" size="BodySmall" color="light">
        {type || "Web | UI/UX"}
      </AtomBody>
      <TagDescContainer>
        <AtomBody align="left" size="BodySmall" color="light">
          {description ||
            "We delivered a nice looking and well crafted user experience for Amara’s website, to bring customers to their platform for flower services and increasing their user’s traffic and sells."}
        </AtomBody>
        <AtomButton href={link}>View Project</AtomButton>
      </TagDescContainer>
    </Tags>
  );
};

export default MoleculesTagProject;
