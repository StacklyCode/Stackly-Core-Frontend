import { FC } from 'react'
import styled from '@emotion/styled'
import MoleculeInstructorCard from '@Src/components/molecules/instructorcard'

const BestInstructorsBox = styled.section`
  background-color: #fff;
  padding: 0 80px 50px 80px;
`

const Container = styled.div`
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  margin: 0 auto;
`

const BestInstructors: FC = () => (
  <BestInstructorsBox>
    <Container>
      <MoleculeInstructorCard
        category="Design"
        instructor="Juanito Ramirez Gonzales"
        info={{ views: 30, likes: 1000 }}
      />
    </Container>
  </BestInstructorsBox>
)

export default BestInstructors
