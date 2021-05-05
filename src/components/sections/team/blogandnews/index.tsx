import { FC } from 'react'
import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import MoleculeBlogAndNewsPublishingGrid from '@Src/components/molecules/blogandnewspublishinggrid'
import MoleculeTabsBlogAndNews from '@Src/components/molecules/tabsblogandnews'

const fakeData = [
  {
    name: 'Como usar Graphql con Nextjs',
    description:
      'We will be in charge to bring your idea to life and give the best value for your users.We will be in charge to bring your idea to life and give the best value for your users.',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '20 Jun 2020',
      views: 10,
      likes: 100,
      duration: 1.5,
    },
  },
  {
    name: 'Top 5 Databases For React Native App...',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '20 Jun 2020',
      views: 10,
      likes: 100,
      duration: 1.5,
    },
  },
  {
    name: 'Not a bit of hesitation you better think twice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '20 Jun 2020',
      views: 10,
      likes: 100,
      duration: 1.5,
    },
  },
  {
    name: 'The litigants on the screen are not actores',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '20 Jun 2020',
      views: 10,
      likes: 100,
      duration: 1.5,
    },
  },
  {
    name: 'Not a bit of hesitation you better think twice',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img:
      'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
    info: {
      date: '20 Jun 2020',
      views: 10,
      likes: 100,
      duration: 1.5,
    },
  },
]

const BlogAndNewsBox = styled.section`
  background-color: #fff;
  padding: 0 80px 50px 80px;
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const HeaderBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 26px;
  align-items: center;

  & > :nth-of-type(1) {
    grid-column: span 2 / span 2;
  }
`

const BlogAndNews: FC = () => (
  <BlogAndNewsBox>
    <Container>
      <HeaderBox>
        <AtomTitle size="TitleSmall" align="left" bold>
          Blog y Noticias
        </AtomTitle>
        <MoleculeTabsBlogAndNews
          tabs={['ALL', 'LIFESTYLE', 'TRAVEL', 'CODE', 'TECH']}
          value="ALL"
          onChange={(event, value) => console.log(event, value)}
        />
      </HeaderBox>
      <MoleculeBlogAndNewsPublishingGrid data={fakeData} />
    </Container>
  </BlogAndNewsBox>
)

export default BlogAndNews
