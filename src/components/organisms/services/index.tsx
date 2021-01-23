import AtomContainer from "@Atoms/container";
import IllustrationHero from "@Assets/img/illustration-services.svg";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import MoleculesTags from "@Molecules/tags";
import AtomButton from "@Atoms/button";
import styled from "@emotion/styled";
import { Link } from "react-scroll";
import { TFunction } from "next-i18next";
import { useSpring, animated } from "react-spring";
import MoleculesTagServices from "@Src/components/molecules/tagservices";

const Services = styled.section`
  background: ${({ theme }) => theme.colors.white};
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    max-width: 620px;
  }
  p {
    max-width: 500px;
  }
  a {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    justify-content: space-evenly;
  }
`;

type IServices = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismServices: React.FC<IServices> = ({ idScroll, t }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(-20px)" },
    delay: 700,
  });
  const props2 = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(20px)" },
    delay: 700,
  });
  return (
    <Services id={idScroll}>
      <AtomContainer
        fullwidth
        alignItems="center"
        justifyContent="space-between"
      >
        <TextContainer style={props2}>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            {t && t("services-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t && t("services-desc")}
          </AtomBody>
          <TagsContainer>
            <MoleculesTagServices
              title={t && t("services-tag-1-title")}
              description={t && t("services-tag-1-desc")}
              icon="design"
            />
            <MoleculesTagServices
              title={t && t("services-tag-2-title")}
              description={t && t("services-tag-2-desc")}
              icon="apps-services"
            />
            <MoleculesTagServices
              title={t && t("services-tag-3-title")}
              description={t && t("services-tag-3-desc")}
              icon="web-mobile"
            />
            <MoleculesTagServices
              title={t && t("services-tag-4-title")}
              description={t && t("services-tag-4-desc")}
              icon="consultancy"
            />
          </TagsContainer>
        </TextContainer>
      </AtomContainer>
    </Services>
  );
};

export default OrganismServices;
