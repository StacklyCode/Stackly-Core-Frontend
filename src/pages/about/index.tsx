import TemplateMain from '@Templates/index'
import OrganismTeam from '@Section/web/team'
import Seo from '@Utils/seo'
import { FC } from 'react'
import { GetStaticProps } from 'next'

const AboutPage: FC = () => {
  return (
    <>
      <Seo page="About" />
      <TemplateMain>
        <OrganismTeam />
      </TemplateMain>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
export default AboutPage
