import styled from '@emotion/styled'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import AtomBody from '@Atoms/body'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'

const About = styled.section`
  display: flex;
  margin-top: 110px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`

const TextContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    max-width: 900px;
    margin-bottom: 20px;
  }
  p {
    max-width: 900px;
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`

type IAbout = {
  idScroll?: string
}

const OrganismAbout: FC<IAbout> = ({ idScroll }) => {
  const { t } = useTranslation('common')

  return (
    <About id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
          <AtomTitle align="center" bold size="TitleMedium">
            {t('about-title')}
          </AtomTitle>
          <AtomBody align="center" size="BodyLarge" color="light">
            {t('about-desc')}
          </AtomBody>
        </TextContainer>
      </AtomContainer>
    </About>
  )
}

export default OrganismAbout
