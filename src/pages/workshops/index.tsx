import { FC } from 'react'
import { GetStaticProps } from 'next'
import TemplateMain from '@Templates/index'
import Search from '@Src/components/sections/workshops/search'

const PageTeam: FC = () => {
  return (
    <TemplateMain SeoTitle="Stackly Team" SeoDesc="Workshops" SeoPage="">
      <Search />
    </TemplateMain>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default PageTeam
