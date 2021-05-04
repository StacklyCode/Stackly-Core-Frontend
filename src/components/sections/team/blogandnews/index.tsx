import { FC } from 'react'
import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import MoleculePublishingCard from '@Src/components/molecules/publishingcard'

const fakeData = [
  {
    name: 'Como usar Graphql con Nextjs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim voluptatibus iusto rerum rem iusto at architecto nulla',
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
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const BlogAndNews: FC = () => (
  <BlogAndNewsBox>
    <Container>
      <AtomTitle size="TitleSmall" align="left" bold>
        Blog y Noticias
      </AtomTitle>
      <MoleculePublishingCard
        name={fakeData[0].name}
        description={fakeData[0].description}
        img={fakeData[0].img}
        info={fakeData[0].info}
      />
      <MoleculePublishingCard
        name={fakeData[0].name}
        description={fakeData[0].description}
        img={fakeData[0].img}
        info={fakeData[0].info}
        variant="simple"
      />
    </Container>
  </BlogAndNewsBox>
)

export default BlogAndNews
