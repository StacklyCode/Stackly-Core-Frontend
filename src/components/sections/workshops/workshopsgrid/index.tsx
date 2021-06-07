import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import WorkshopCard from '@Src/components/molecules/workshopcard'
import Container from '@Src/components/atoms/container'

const WorkshopsGridRoot = styled.section`
  padding: 50px 0;
  background-color: #fff;

  ${({ theme }) => theme.mediaquery.small} {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  ${({ theme }) => theme.mediaquery.medium} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`

const Grid = styled.ul`
  max-width: ${({ theme }) => `${theme.breakpoints.l}px`};
  margin: 0 auto;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  a {
    text-decoration: none;
  }

  ${({ theme }) => theme.mediaquery.small} {
    column-gap: 140px;
    row-gap: 60px;
  }

  ${({ theme }) => theme.mediaquery.medium} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 60px;
  }

  ${({ theme }) => theme.mediaquery.large} {
    column-gap: 120px;
  }
`

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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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

const WorkshopsGrid: FC = () => (
  <WorkshopsGridRoot>
    <Container>
      <Grid>
        {fakeData.map((item) => (
          <li key={item.id}>
            <Link href="/">
              <a>
                <WorkshopCard {...item} fullWidth />
              </a>
            </Link>
          </li>
        ))}
      </Grid>
    </Container>
  </WorkshopsGridRoot>
)

export default WorkshopsGrid
