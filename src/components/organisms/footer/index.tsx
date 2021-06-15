import AtomContainer from '@Atoms/container'
import AtomIcon from '@Atoms/icon'
import styled from '@emotion/styled'
import Link from '@Src/utils/link'
import useTranslation from 'next-translate/useTranslation'
import LinkNext from 'next/link'
import { FC } from 'react'

type FooterProps = {
  title?: string
}

const Footer = styled.div<FooterProps>`
  width: 100vw;
  min-height: 110px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0px -5px 10px ${({ theme }) => `${theme.colors.primary.base}0D`};
`

const FooterContainer = styled.div<FooterProps>`
  width: 100%;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 30px;
  }
  & > span {
    display: none;
    width: 358.47px;
    ${({ theme }) => theme.mediaquery.large} {
      display: flex;
    }
  }
`
const FooterContainerLogo = styled.div<FooterProps>`
  min-width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    justify-content: flex-start;
  }
`
const FooterSocialContainer = styled.div<FooterProps>`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    width: 25px;
    margin-right: 30px;
  }
  a:nth-last-of-type(1) {
    margin-right: 0px;
  }
`

const FooterCopyrighted = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme && theme.colors.primary.base};
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`

const OrganismFooter: FC<FooterProps> = () => {
  const { t } = useTranslation('common')
  return (
    <Footer>
      <AtomContainer fullwidth alignItems="center" justifyContent="center">
        <FooterContainer>
          <FooterContainerLogo>
            <AtomIcon name="stacklycode" variant="outlined" color="primary" size="2x" />
          </FooterContainerLogo>
          <LinkNext href="/copyrighted">
            <FooterCopyrighted>{t('footer-desc')}</FooterCopyrighted>
          </LinkNext>
          <FooterSocialContainer>
            <Link
              to="https://www.facebook.com/StacklyCodeOfficial"
              title="Facebook Page"
              isExternal
            >
              <AtomIcon name="facebook" variant="filled" color="primary" size="2x" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/68642625/admin/"
              title="Linkedin Page"
              isExternal
            >
              <AtomIcon name="linkedin" variant="filled" color="primary" size="2x" />
            </Link>
            <Link to="https://github.com/StacklyCode" title="Github Page" isExternal>
              <AtomIcon name="github" variant="filled" color="primary" size="2x" />
            </Link>
            <Link to="https://twitter.com/StacklyCode" title="Twitter Page">
              <AtomIcon name="twitter" variant="filled" color="primary" size="2x" />
            </Link>
          </FooterSocialContainer>
        </FooterContainer>
      </AtomContainer>
    </Footer>
  )
}

export default OrganismFooter
