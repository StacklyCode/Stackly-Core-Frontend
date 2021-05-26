import { FC } from 'react'
import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import MoleculeWorkshopCarousel from '@Src/components/molecules/workshopscarousel'

const fakeData = [
  {
    id: 1,
    name: 'Taller de Svelte & Tailwind',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '10 Feb',
      likes: 50,
      views: 300,
    },
  },
  {
    id: 2,
    name: 'Taller de Svelte & Tailwind',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '10 Feb',
      likes: 50,
      views: 300,
    },
  },
  {
    id: 3,
    name: 'Taller de Svelte & Tailwind',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '10 Feb',
      likes: 50,
      views: 300,
    },
  },
  {
    id: 4,
    name: 'Taller de Svelte & Tailwind',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '10 Feb',
      likes: 50,
      views: 300,
    },
  },
  {
    id: 5,
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
  padding: 90px 4rem 50px 4rem;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.s}px`}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const MoleculeWorkshopCarouselStyled = styled(MoleculeWorkshopCarousel)`
  margin-top: 25px;
`

const WorkshopNews: FC = () => (
  <WorkshopNewsBox>
    <Container>
      <AtomTitle size="TitleSmall" align="left" bold>
        Nuevos Talleres
      </AtomTitle>
      <MoleculeWorkshopCarouselStyled data={fakeData} />
    </Container>
  </WorkshopNewsBox>
)

export default WorkshopNews
