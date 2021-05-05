import { FC } from 'react'
import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import MoleculeInstructorsCarousel from '@Src/components/molecules/instructorscarousel'

const fakeData = [
  {
    category: 'Design',
    instructor: 'Juanito Ramires Gonzales',
    img:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    info: {
      views: 30,
      likes: 100,
    },
  },
  {
    category: 'Design',
    img:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    instructor: 'Esther Howard',
    info: {
      views: 30,
      likes: 100,
    },
  },
  {
    category: 'Design',
    img:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    instructor: 'Juanito Ramires Gonzales',
    info: {
      views: 30,
      likes: 100,
    },
  },
  {
    category: 'Design',
    img:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
    instructor: 'Juanita Ramires Gonzales',

    info: {
      views: 30,
      likes: 100,
    },
  },
  {
    category: 'Design',
    instructor: 'Juanito Ramires Gonzales',
    img:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    info: {
      views: 30,
      likes: 100,
    },
  },
]

const BestInstructorsBox = styled.section`
  background-color: #fff;
  padding: 0 80px 80px;
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const BestInstructors: FC = () => (
  <BestInstructorsBox>
    <Container>
      <AtomTitle size="TitleSmall" align="left" bold>
        Mejores Instructores
      </AtomTitle>
      <MoleculeInstructorsCarousel data={fakeData} />
    </Container>
  </BestInstructorsBox>
)

export default BestInstructors
