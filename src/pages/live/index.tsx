import TemplateMain from '@Templates/index'
import OrganismLive from '@Section/web/live'
import { GetStaticProps } from 'next'
import { FC } from 'react'

const LivePage: FC = () => {
  return (
    <>
      <TemplateMain>
        <OrganismLive />
      </TemplateMain>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default LivePage
