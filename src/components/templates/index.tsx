import styled from '@emotion/styled'
import OrganismFooter from '@Organisms/footer'
import OrganismsNavigation from '@Organisms/navegation'
import { FC } from 'react'

import { PROPSWITHCHILDREN } from '@Src/hooks/GlobalContext'
import Seo from '@Utils/seo'

const Background = styled.main`
  height: max-content;
  width: 100%;
  margin-top: 90px;
`

type ITemplate = {
  SeoTitle?: string
  SeoPage?: string
  SeoDesc?: string
} & PROPSWITHCHILDREN

const TemplateMain: FC<ITemplate> = ({ children, SeoTitle, SeoPage, SeoDesc }) => {
  return (
    <Background>
      <Seo title={SeoTitle} page={SeoPage} description={SeoDesc} />
      <OrganismsNavigation />
      {children}
      <OrganismFooter />
    </Background>
  )
}

export default TemplateMain
