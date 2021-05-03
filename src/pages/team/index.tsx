import TemplateMain from '@Templates/index'
import { FC } from 'react'
import { GetStaticProps } from 'next'
import Hero from '@Section/team/hero'
import WorkshopNews from '@Src/components/sections/team/workshopnews'

const PageTeam: FC = () => {
  return (
    <TemplateMain
      SeoTitle="Stackly Team"
      SeoDesc="Team"
      SeoPage="In Stackly Code we understand that time is the most valuable asset and if you put it in our hands, we will make sure to bring the best product for your needs."
    >
      <Hero />
      <WorkshopNews />
    </TemplateMain>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
export default PageTeam
