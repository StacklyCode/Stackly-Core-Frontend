import { FC } from 'react'
import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import MoleculeRecomendedWorkshop from '@Src/components/molecules/recomendedworkshop'

const Section = styled.section`
  margin-top: 24px;
`

const RecomendedBox = styled.ul`
  display: grid;
  margin-top: 20px;
  gap: 16px;
`

const Recomended: FC = () => (
  <Section>
    <AtomTitle size="SubTitleLarge" align="left" bold>
      Talleres Recomendados
    </AtomTitle>
    <RecomendedBox>
      <li>
        <MoleculeRecomendedWorkshop
          name="Taller de Svelte & Tailwind"
          img="https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png"
          info={{ views: 20, publicationDate: '10 days Ago', likes: 12 }}
        />
      </li>
      <li>
        <MoleculeRecomendedWorkshop
          name="Taller de Svelte & Tailwind"
          img="https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png"
          info={{ views: 20, publicationDate: '10 days Ago', likes: 12 }}
        />
      </li>
      <li>
        <MoleculeRecomendedWorkshop
          name="Taller de Svelte & Tailwind"
          img="https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png"
          info={{ views: 20, publicationDate: '10 days Ago', likes: 12 }}
        />
      </li>
    </RecomendedBox>
  </Section>
)

export default Recomended
