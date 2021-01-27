import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import MoleculesTags from "@Molecules/tags";
import { useSpring, animated } from "react-spring";
import { TFunction } from "next-i18next";
import MoleculesTagTeam from "@Src/components/molecules/tagteam";

const fakeUserData = [
  {
    id: "0",
    name: "Fernando Lopez",
    description: "CEO",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607380127/StacklyTeam/15000248_djw7aa.jpg",
    socialnetwork: [
      { name: "github", url: "https://github.com/Beor18" },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/fernandogabriellopez/",
      },
    ],
  },
  {
    id: "1",
    name: "Carlos Montalvo",
    description: "CTO",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379875/StacklyTeam/Carlos-Montalvo-CTO_xzbmq4.png",
    socialnetwork: [
      { name: "github", url: "https://github.com/ZephiroRB" },
      { name: "twitter", url: "https://twitter.com/CrlosMontalvo" },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/carlosmontalvo-ingeniero-software",
      },
    ],
  },
  {
    id: "2",
    name: "Jose Luis Reyes",
    description: "CTO",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379872/StacklyTeam/Jose-Luis-Reyes--CTO_bzngai.jpg",
    socialnetwork: [
      { name: "github", url: "https://github.com/joseluisroot" },
      { name: "linkedin", url: "https://www.linkedin.com/in/joseluisroot/" },
    ],
  },
  {
    id: "3",
    name: "William Jesus",
    description: "Fullstack Developer",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607381258/StacklyTeam/IMG-20191220-WA0003-01_bb51ks.png",
    socialnetwork: [
      { name: "github", url: "https://github.com/Willishakespeare" },
      { name: "twitter", url: "https://twitter.com/WilliSkr13" },
      {
        name: "linkedin",
        url:
          "https://www.linkedin.com/in/william-jesus-covarrubias-ramos-84410339/",
      },
    ],
  },
  {
    id: "4",
    name: "Juan Carlos Cruz",
    description: "UI-UX Designer",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379874/StacklyTeam/Juan-Carlos-Cruz-UI-Designer_mbjiu6.jpg",
    socialnetwork: [
      { name: "github", url: "https://github.com/juank1791" },
      { name: "linkedin", url: "https://www.linkedin.com/in/juancarlos-cruz/" },
    ],
  },
  {
    id: "5",
    name: "Erick Vargas",
    description: "Frontend Developer",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379872/StacklyTeam/Erick-Vargas-Frontend-Developer_piy4fo.png",
    socialnetwork: [
      { name: "github", url: "https://github.com/erianvc" },
      { name: "linkedin", url: "https://www.linkedin.com/in/erianvc/" },
    ],
  },
  {
    id: "6",
    name: "Pablo Sabater",
    description: "Fullstack Developer",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379873/StacklyTeam/Pablo-Sabater-Backend-Developer_ggz171.jpg",
    socialnetwork: [
      { name: "github", url: "https://github.com/Blopaa" },
      {
        name: "twitter",
        url: "https://twitter.com/Pabloosabaterr",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/pablo-sabater-jimenez/",
      },
    ],
  },
  {
    id: "7",
    name: "Dano Reyes",
    description: "DBA Manager",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379873/StacklyTeam/Dano-Reyes-DBA-Manager_tbh5ef.png",
    socialnetwork: [
      {
        name: "github",
        url: "https://github.com/orgs/StacklyCode/people/DanoRysJan",
      },
      { name: "linkedin", url: "https://www.linkedin.com/in/dano-reyes/" },
    ],
  },
];

const Team = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    max-width: 900px;
    margin-bottom: 20px;
  }
  p {
    max-width: 900px;
    margin-bottom: 20px;
  }
  a {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 10px;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  article {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

const TeamContainer = styled(animated.div)`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  align-items: center;
`;

type ITeam = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismTeam: React.FC<ITeam> = ({ idScroll, t }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(-20px)" },
    delay: 700,
  });
  return (
    <Team id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="center">
        <TeamContainer style={props}>
          <TextContainer>
            <AtomTitle align="center" bold size="TitleMedium">
              {t && t("team-title")}
            </AtomTitle>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t && t("team-desc-1")}
            </AtomBody>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t && t("team-desc-2")}
            </AtomBody>
          </TextContainer>

          <TagsContainer>
            {fakeUserData.map((item) => (
              <MoleculesTagTeam key={item.id} name={item.name} description={item.description} social={item.socialnetwork} image={item.img}/>
            ))}
          </TagsContainer>
        </TeamContainer>
      </AtomContainer>
    </Team>
  );
};

export default OrganismTeam;
