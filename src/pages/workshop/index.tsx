import { FC } from 'react'
import { GetStaticProps } from 'next'
import TemplateMain from '@Templates/index'
import WorkshopGridTemplate from '@Src/components/templates/workshopGridTemplate'
import MediaContent from '@Src/components/sections/workshop/mediacontent'
import Comments from '@Src/components/sections/workshop/comments'

const PageTeam: FC = () => {
  return (
    <TemplateMain SeoTitle="Stackly Team" SeoDesc="" SeoPage="">
      <WorkshopGridTemplate mediaContent={<MediaContent />} comments={<Comments />} />
    </TemplateMain>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
export default PageTeam
