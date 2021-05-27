import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
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
  padding: 0 4rem 80px 4rem;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.s}px`}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const HeadingBox = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.m}px`}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const AnchorSeeMore = styled.a<{ isBottom?: boolean }>`
  font-size: ${({ theme }) => theme.texts.BodySmall.FontSize};
  font-family: ${({ theme }) => theme.texts.BodySmall.FontFamily};
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;

  ${({ isBottom, theme }) =>
    isBottom
      ? css`
          display: block;
          margin-top: 30px;
          text-align: center;

          @media (min-width: ${theme.breakpoints.m}px) {
            display: none;
          }
        `
      : css`
          display: none;

          @media (min-width: ${theme.breakpoints.m}px) {
            display: initial;
          }
        `}
`

const BestInstructors: FC = () => (
  <BestInstructorsBox>
    <Container>
      <HeadingBox>
        <AtomTitle size="TitleSmall" align="left" bold>
          Mejores Instructores
        </AtomTitle>
        <Link href="/">
          <AnchorSeeMore>Ver más</AnchorSeeMore>
        </Link>
      </HeadingBox>
      <MoleculeInstructorsCarousel data={fakeData} />
      <Link href="/">
        <AnchorSeeMore isBottom>Ver más</AnchorSeeMore>
      </Link>
    </Container>
  </BestInstructorsBox>
)

export default BestInstructors
