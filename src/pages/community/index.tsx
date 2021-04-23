import TemplateMain from '@Templates/index'
import OrganismCommunity from '@Section/web/community'
import { GetStaticProps } from 'next'
import { FC } from 'react'

const CommunityPage: FC = () => {
  return (
    <>
      <TemplateMain>
        <OrganismCommunity />
      </TemplateMain>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default CommunityPage
