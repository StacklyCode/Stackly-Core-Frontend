import AtomBody from '@Atoms/body'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import styled from '@emotion/styled'
import MoleculesTagTeam from '@Src/components/molecules/tagteam'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'

const fakeUserData = [
  {
    id: '1',
    name: 'Carlos Montalvo',
    description: 'CTO',
    img:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHWWh4aBGfw3g/profile-displayphoto-shrink_800_800/0/1639274676490?e=1645660800&v=beta&t=Q9x8_2Teh_A3hNOlQ8kmlgyiBOqyFfBHwUp9WYR6M5k',
    socialnetwork: [
      { name: 'github', url: 'https://github.com/ZephiroRB' },
      { name: 'twitter', url: 'https://twitter.com/CrlosMontalvo' },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/carlosmontalvo-ingeniero-software',
      },
    ],
  },
  {
    id: '3',
    name: 'William Jesus',
    description: 'Frontend Leader',
    img:
      'https://media-exp1.licdn.com/dms/image/C5603AQH-AA47ERffeA/profile-displayphoto-shrink_800_800/0/1626139953564?e=1645660800&v=beta&t=OqJeNM0Eu0lInF2CUj_cWxkl0FDwUES4dZPQ5gINkd8',
    socialnetwork: [
      { name: 'github', url: 'https://github.com/Willishakespeare' },
      { name: 'twitter', url: 'https://twitter.com/WilliSkr13' },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/william-jesus-covarrubias-ramos-84410339/',
      },
    ],
  },
  {
    id: '4',
    name: 'Juan Carlos Cruz',
    description: 'UI-UX Leader',
    img: 'https://avatars.githubusercontent.com/u/13596890?v=4',
    socialnetwork: [
      { name: 'github', url: 'https://github.com/juank1791' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/juancarlos-cruz/' },
    ],
  },
  {
    id: '0',
    name: 'Iván García',
    description: 'Frontend developer',
    img:
      'https://firebasestorage.googleapis.com/v0/b/gyphsbackend.appspot.com/o/IMG_20211223_113953.jpg?alt=media&token=dfcd5886-5d94-4d14-87f6-0445670589c2',
    socialnetwork: [
      { name: 'github', url: 'https://github.com/Whil117' },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/iv%C3%A1n-garc%C3%ADa-6b8238208/',
      },
    ],
  },
]

const Team = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.light};
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

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
`
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
  @media (max-width: 555px) {
    align-items: center;
    flex-direction: column;
    article {
      margin-right: 0;
    }
  }
`

const TeamContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  align-items: center;
`

type ITeam = {
  idScroll?: string
}

const OrganismTeam: FC<ITeam> = ({ idScroll }) => {
  const { t } = useTranslation('common')
  return (
    <Team id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="center">
        <TeamContainer>
          <TextContainer>
            <AtomTitle align="center" bold size="TitleMedium">
              {t('about-title')}
            </AtomTitle>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t('about-desc')}
            </AtomBody>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t('team-desc-1')}
            </AtomBody>
            <AtomBody align="center" size="BodyLarge" color="light">
              {t('team-desc-2')}
            </AtomBody>
          </TextContainer>

          <TagsContainer>
            {fakeUserData.map((item) => (
              <MoleculesTagTeam
                key={`${item.id}Key`}
                name={item.name}
                description={item.description}
                social={item.socialnetwork}
                image={item.img}
              />
            ))}
          </TagsContainer>
        </TeamContainer>
      </AtomContainer>
    </Team>
  )
}

export default OrganismTeam
