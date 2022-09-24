import AtomBody from '@Atoms/body'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import styled from '@emotion/styled'
import MoleculesTagServices from '@Src/components/molecules/tagservices'
import { PROPSWITHCHILDREN } from '@Src/hooks/GlobalContext'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'

const Services = styled.section`
  background: ${({ theme }) => theme.colors.white};
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding-bottom: 80px;
  }
`

const TextContainer = styled.div`
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
`
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  gap: 20px;

  @media (max-width: 555px) {
    flex-direction: column;
    align-items: center;
  }

  /* ${({ theme }) => theme.mediaquery.small} { */
  /* justify-content: space-evenly; */
  /* gap: 20px; */
  /* } */
`

type IServices = {
  idScroll?: string
} & PROPSWITHCHILDREN

const OrganismServices: FC<IServices> = ({ idScroll }) => {
  const { t } = useTranslation('common')

  return (
    <Services id={idScroll}>
      <AtomContainer fullwidth alignItems="center" justifyContent="space-between">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium">
            {t('services-title')}
          </AtomTitle>
          <AtomBody align="left" size="BodyLarge" color="light">
            {t('services-desc')}
          </AtomBody>
          <TagsContainer>
            <MoleculesTagServices
              title={t('services-tag-1-title')}
              description={t('services-tag-1-desc')}
              icon={{ name: 'design', variant: 'outlined' }}
            />
            <MoleculesTagServices
              title={t('services-tag-2-title')}
              description={t('services-tag-2-desc')}
              icon={{ name: 'appservices', variant: 'outlined' }}
            />
            <MoleculesTagServices
              title={t('services-tag-3-title')}
              description={t('services-tag-3-desc')}
              icon={{ name: 'webmobile', variant: 'outlined' }}
            />
            <MoleculesTagServices
              title={t('services-tag-4-title')}
              description={t('services-tag-4-desc')}
              icon={{ name: 'consultancy', variant: 'outlined' }}
            />
          </TagsContainer>
        </TextContainer>
      </AtomContainer>
    </Services>
  )
}

export default OrganismServices
