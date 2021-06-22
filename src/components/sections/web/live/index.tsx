import styled from '@emotion/styled'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import AtomBody from '@Atoms/body'
import { FC } from 'react'

import ReactPlayer from 'react-player'

import AtomButton from '@Atoms/button'
import useTranslation from 'next-translate/useTranslation'

const Live = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  margin-top: 110px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
`

const IllustrationContainer = styled.div`
  width: 35%;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 70%;
  }
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 60%;
  }

  h2 {
    margin-bottom: 20px;
  }
  a {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`

type ILive = {
  idScroll?: string
}

const OrganismLive: FC<ILive> = ({ idScroll }) => {
  const { t } = useTranslation('common')

  return (
    <Live id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url="http://amssamples.streaming.mediaservices.windows.net/69fbaeba-8e92-4740-aedc-ce09ae945073/AzurePromo.ism/manifest(format=mpd-time-csf)"
            config={{
              file: {
                forceDASH: true,
              },
            }}
          />
          <AtomTitle align="left" size="TitleMedium">
            Taller de Diseño (FrontEnd)
          </AtomTitle>
          <AtomButton href="https://discord.stacklycode.com/">Seguir 29k</AtomButton>
        </TextContainer>
        <IllustrationContainer>
          <AtomTitle align="center" bold size="TitleMedium" color="black">
            Un Chat
          </AtomTitle>
        </IllustrationContainer>
      </AtomContainer>
    </Live>
  )
}

export default OrganismLive
