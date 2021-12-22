import AtomBody from '@Atoms/body'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import styled from '@emotion/styled'
import MoleculesTagTeam from '@Src/components/molecules/tagteam'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'

const fakeUserData = [
  {
    id: '0',
    name: 'Iván García',
    description: 'Frontend developer',
    img:
      'https://avatars.githubusercontent.com/u/67771688?s=400&u=a3f864486ae2c2d4b454c37770a9b76b3011718d&v=4',
    socialnetwork: [
      { name: 'github', url: 'https://github.com/Whil117' },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/iv%C3%A1n-garc%C3%ADa-6b8238208/',
      },
    ],
  },
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
      'https://res.cloudinary.com/stacklycode/image/upload/v1607381258/StacklyTeam/IMG-20191220-WA0003-01_bb51ks.png',
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
    img:
      'https://res.cloudinary.com/stacklycode/image/upload/v1607379874/StacklyTeam/Juan-Carlos-Cruz-UI-Designer_mbjiu6.jpg',
    socialnetwork: [
      { name: 'github', url: 'https://github.com/juank1791' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/juancarlos-cruz/' },
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
