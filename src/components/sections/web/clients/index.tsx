import styled from '@emotion/styled'
import AtomIcon from '@Atoms/icon'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import AtomBody from '@Atoms/body'

import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Link from '@Src/utils/link'

// const fakeUserData = [
//   {
//     name: "Albert Flores",
//     description: "client-desc-1",
//     img:
//       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     socialnetwork: [
//       { name: "facebook", url: "fb.com/willishakkespeare" },
//       { name: "twitter", url: "twitter.com/willishakkespeare" },
//       { name: "linkedin", url: "linkedin.com/willishakkespeare" },
//     ],
//     stars: true,
//   },
//   {
//     name: "Albert Flores",
//     description: "client-desc-2",
//     img:
//       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     socialnetwork: [
//       { name: "facebook", url: "fb.com/willishakkespeare" },
//       { name: "twitter", url: "twitter.com/willishakkespeare" },
//       { name: "linkedin", url: "linkedin.com/willishakkespeare" },
//     ],
//     stars: true,
//   },
//   {
//     name: "Albert Flores",
//     description: "client-desc-3",
//     img:
//       "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     socialnetwork: [
//       { name: "facebook", url: "fb.com/willishakkespeare" },
//       { name: "twitter", url: "twitter.com/willishakkespeare" },
//       { name: "linkedin", url: "linkedin.com/willishakkespeare" },
//     ],
//     stars: true,
//   },
// ];

const Clients = styled.section`
  min-height: calc(100vh - 110px);
  background-color: ${({ theme }) => theme.colors.secondary.light};
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
  padding: 50px 0px;
`

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
`
const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: max-content;
  width: 100%;
  margin-top: 50px;
`
const TagsContainerClients = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

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
`

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
`

const SocialNetworkContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaquery.small} {
    margin-bottom: 0px;
  }

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`
const StarContainer = styled.div`
  display: flex;
  width: fit-content;

  svg {
    color: #ffd74b;
  }
`

type IClients = {
  idScroll?: string
}

const OrganismClients: FC<IClients> = ({ idScroll }) => {
  const { t } = useTranslation('common')
  return (
    <Clients id={idScroll}>
      <AtomContainer alignItems="flex-start" justifyContent="flex-start">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium">
            {t('clients-title')}
          </AtomTitle>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t('clients-desc-1')}
          </AtomBody>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t('clients-desc-2')}
          </AtomBody>
          <TagsContainer>
            <TagsContainerClients>
              <TagsClient>
                <AtomTitle bold size="SubTitleLarge">
                  COMFECO
                </AtomTitle>
                <AtomBody align="left" size="BodyMedium" color="light">
                  {t('client-desc-1')}
                </AtomBody>
                <TagsClientSocial>
                  <SocialNetworkContainer>
                    <Link to="https://www.comfeco.com/" isExternal>
                      <AtomIcon name="world" variant="filled" color="primary" size={24} />
                    </Link>
                    <Link to="https://twitter.com/comfeco" isExternal>
                      <AtomIcon name="twitter" variant="filled" color="primary" size={24} />
                    </Link>
                  </SocialNetworkContainer>
                  <StarContainer>
                    <AtomIcon name="star" variant="filled" size={24} />
                    <AtomIcon name="star" variant="filled" size={24} />
                    <AtomIcon name="star" variant="filled" size={24} />
                    <AtomIcon name="star" variant="filled" size={24} />
                    <AtomIcon name="star" variant="filled" size={24} />
                  </StarContainer>
                </TagsClientSocial>
              </TagsClient>
            </TagsContainerClients>
          </TagsContainer>
        </TextContainer>
      </AtomContainer>
    </Clients>
  )
}

export default OrganismClients
