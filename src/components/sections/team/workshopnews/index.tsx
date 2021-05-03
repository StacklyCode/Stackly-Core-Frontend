import { FC } from 'react'
import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import MoleculeWorkshopCard from '@Src/components/molecules/workshopcard'

const fakeData = [
  {
    name: 'Taller de Svelte & Tailwind',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '10 Feb',
      likes: 50,
      views: 300,
    },
  },
]

const WorkshopNewsBox = styled.section`
  background-color: #fff;
  padding-top: 90px;
  padding-bottom: 50px;
  padding: 90px 80px 50px 80px;
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const WorkshopNews: FC = () => (
  <WorkshopNewsBox>
    <Container>
      <AtomTitle size="TitleSmall" align="left" bold>
        Nuevos Talleres
      </AtomTitle>
      <MoleculeWorkshopCard {...fakeData[0]} />
    </Container>
  </WorkshopNewsBox>
)

export default WorkshopNews
