import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import MoleculesTags from "@Molecules/tags";
import AtomButton from "@Atoms/button";
import { TFunction } from "next-i18next";

const fakeUserData = [
  {
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
    name: "Pablo Sabater",
    description: "Backend Developer",
    img:
      "https://res.cloudinary.com/stacklycode/image/upload/v1607379873/StacklyTeam/Pablo-Sabater-Backend-Developer_ggz171.jpg",
    socialnetwork: [
      { name: "github", url: "https://github.com/Blopaa" },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/pablo-sabater-jimenez/",
      },
    ],
  },
  {
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
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  position: relative;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 50%;
  }

  h2 {
    margin-bottom: 20px;
  }
  p {
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
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  article {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

type ITeam = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismTeam: React.FC<ITeam> = ({ idScroll, t }) => {
  return (
    <Team id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TagsContainer>
          {fakeUserData.map((item) => (
            <MoleculesTags
              key={item.description}
              title={item.name}
              description={item.description}
              img={item.img}
              socialnetwork={item.socialnetwork}
              color="cyan"
            />
          ))}
        </TagsContainer>
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="white">
            {t && t("team-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            {t && t("team-desc-1")}
          </AtomBody>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            {t && t("team-desc-2")}
          </AtomBody>
          <AtomButton href="/#ContactScroll" color="primary">
            {t && t("team-button")}
          </AtomButton>
        </TextContainer>
      </AtomContainer>
    </Team>
  );
};

export default OrganismTeam;
