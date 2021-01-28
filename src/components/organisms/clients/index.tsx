import styled from "@emotion/styled";
import AtomIcon from "@Atoms/icon";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";

import { TFunction } from "next-i18next";

const fakeUserData = [
  {
    name: "Albert Flores",
    description: "client-desc-1",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
    stars: true,
  },
  {
    name: "Albert Flores",
    description: "client-desc-2",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
    stars: true,
  },
  {
    name: "Albert Flores",
    description: "client-desc-3",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
    stars: true,
  },
];

const Clients = styled.section`
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding-bottom: 50px;
  ${({ theme }) => theme.mediaquery.small} {
    padding-bottom: 80px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
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
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 10px;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: max-content;
  width: 100%;
  margin-top: 50px;
`;
const TagsContainerClients = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TagsClient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  h4 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 5px;
    font-style: italic;
  }
  ${({ theme }) => theme.mediaquery.small} {
    align-items: flex-start;
    padding: 40px 110px;
  }
  background-color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: max-content;
  width: 68vw;
`;

const TagsClientSocial = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-between;
  height: max-content;
  width: 100%;
  margin-top: 10px;
`;

const SocialNetworkContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaquery.small} {
    margin-bottom: 0px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    ${({ theme }) =>
      true && {
        width: "20px",
        height: "20px",
        marginRight: "15px",
        svg: {
          width: "100%",
          height: "100%",
          path: {
            fill: theme.colors.primary.base,
          },
        },
      }}
  }
`;
const StarContainer = styled.div`
  display: flex;
  width: fit-content;
  div {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: #ffd74b;
      }
    }
  }
`;

type IClients = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismClients: React.FC<IClients> = ({ idScroll, t }) => {
  return (
    <Clients id={idScroll}>
      <AtomContainer alignItems="flex-start" justifyContent="flex-start">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium">
            {t && t("clients-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t && t("clients-desc-1")}
          </AtomBody>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t && t("clients-desc-2")}
          </AtomBody>
          <TagsContainer>
            <TagsContainerClients>
              <TagsClient>
                <AtomTitle bold size="SubTitleLarge">
                  COMFECO
                </AtomTitle>
                <AtomBody align="left" size="BodyMedium" color="light">
                  {t && t("client-desc-1")}
                </AtomBody>
                <TagsClientSocial>
                  <SocialNetworkContainer>
                    <a target="_blank" href="https://www.comfeco.com/">
                      <AtomIcon icon="web" color="dark" size="12px" />
                    </a>
                    <a target="_blank" href="https://twitter.com/comfeco">
                      <AtomIcon icon="twitter" color="dark" size="12px" />
                    </a>
                  </SocialNetworkContainer>
                  <StarContainer>
                    <AtomIcon icon="star" />
                    <AtomIcon icon="star" />
                    <AtomIcon icon="star" />
                    <AtomIcon icon="star" />
                    <AtomIcon icon="star" />
                  </StarContainer>
                </TagsClientSocial>
              </TagsClient>
            </TagsContainerClients>
          </TagsContainer>
        </TextContainer>
      </AtomContainer>
    </Clients>
  );
};

export default OrganismClients;
