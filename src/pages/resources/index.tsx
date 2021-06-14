import TemplateMain from '@Templates/index'
import { FC } from 'react'
import { GetStaticProps } from 'next'

const PageResources: FC = () => {
  return (
    <TemplateMain
      SeoTitle="Stackly Resources"
      SeoDesc="Resources"
      SeoPage="In Stackly Code we understand that time is the most valuable asset and if you put it in our hands, we will make sure to bring the best product for your needs."
    >
      Page To Resources
    </TemplateMain>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
export default PageResources
