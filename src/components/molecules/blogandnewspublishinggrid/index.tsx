import { FC } from 'react'
import MoleculePublishingCard from '@Src/components/molecules/publishingcard'
import styled from '@emotion/styled'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 26px;
  margin-top: 50px;

  div:nth-of-type(1) {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
  }
`

type BlogAndNewsPublishingGridProps = {
  data: {
    name?: string
    description?: string
    img?: string
    info?: {
      date?: string
      views?: number
      likes?: number
      duration?: number
    }
  }[]
}

const BlogAndNewsPublishingGrid: FC<BlogAndNewsPublishingGridProps> = ({ data }) => (
  <Grid>
    {Array.isArray(data) &&
      data
        .slice(0, 5)
        .map(({ name, img, description, info }, idx) => (
          <MoleculePublishingCard
            key={`${name}-${idx}`}
            name={name}
            img={img}
            description={description}
            info={info}
            variant={idx > 0 ? 'simple' : 'default'}
            fullWidth
          />
        ))}
  </Grid>
)

export default BlogAndNewsPublishingGrid
