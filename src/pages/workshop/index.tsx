import { FC } from 'react'
import { GetStaticProps } from 'next'
import TemplateMain from '@Templates/index'
import WorkshopGridTemplate from '@Src/components/templates/workshopGridTemplate'
import MediaContent from '@Src/components/sections/workshop/mediacontent'

const PageTeam: FC = () => {
  return (
    <TemplateMain SeoTitle="Stackly Team" SeoDesc="" SeoPage="">
      <WorkshopGridTemplate mediaContent={<MediaContent />} />
    </TemplateMain>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
export default PageTeam
