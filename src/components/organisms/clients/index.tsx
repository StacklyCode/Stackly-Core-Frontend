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
  justify-content: center;
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
  position: relative;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  flex-direction: column;

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
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  bottom: 0;
  height: 250px;
  width: 100%;
`;
const TagsContainerClients = styled.div`
  display: flex;
  height: 80%;
  width: max-content;
`;

const TagsClient = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 110px;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  width: 68vw;
`;

const TagsClientSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary.dark};
  height: max-content;
  width: 100%;
  margin-top: 10px;
`;

const SocialNetworkContainer = styled.div`
  display: flex;
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
      <AtomContainer alignItems="flex-start" justifyContent="center">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            {t && t("clients-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t && t("clients-desc-1")}
          </AtomBody>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t && t("clients-desc-2")}
          </AtomBody>
        </TextContainer>
        <TagsContainer>
          <TagsContainerClients>
            <TagsClient />
            <TagsClient>
              <AtomTitle bold size="SubTitleLarge">
                Albert Flores
              </AtomTitle>
              <AtomBody align="left" size="BodyMedium">
                Marketing strategies to bring a fresh and modern identity for
                your brand. Marketing strategies to bring a fresh and modern
                identity for your brand.
              </AtomBody>
              <TagsClientSocial>
                <SocialNetworkContainer>
                  <a>
                    <AtomIcon icon="facebook" color="dark" size="12px" />
                  </a>
                  <a>
                    <AtomIcon icon="linkedin" color="dark" size="12px" />
                  </a>
                  <a>
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
            <TagsClient />
          </TagsContainerClients>
        </TagsContainer>
      </AtomContainer>
    </Clients>
  );
};

export default OrganismClients;
