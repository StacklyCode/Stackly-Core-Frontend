import AtomContainer from '@Atoms/container'
import AtomIcon from '@Atoms/icon'
import styled from '@emotion/styled'
import { FC, useState } from 'react'
import LinkNext from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import AtomButton from '@Src/components/atoms/button'
import MoleculesNavSetting from '@Src/components/molecules/navseemore'
import MoleculesSetting from '@Src/components/molecules/navsettings'

type NavegationProps = {
  title?: string
}

const Navigation = styled.header<NavegationProps>`
  width: 100vw;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zindex.zFixed};
  box-shadow: 0px 5px 10px ${({ theme }) => `${theme.colors.primary.base}0D`};
`
const NavigationLogo = styled.div`
  div {
    width: 32px;
    height: 32px;
    margin-right: 40px;
    cursor: pointer;
    svg {
      g {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaquery.medium} {
    div {
      svg {
        g {
          display: block;
        }
      }
    }
  }
`

const NavigationLinks = styled.div<NavegationProps>`
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  a {
    text-decoration: none;
  }
`

const NavigationLink = styled.div<NavegationProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;
  display: flex;
  position: relative;
  div {
    position: absolute;
    right: -15px;
    top: -8px;
    width: 35px;
  }

  margin-right: 20px;
`

const IconSideBar = styled.div<NavegationProps>`
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
  cursor: pointer;
  z-index: ${({ theme }) => theme.zindex.zModal};
`

const SideBar = styled.div<NavegationProps>`
  height: 100vh;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.05);
`
const ContainerSideBar = styled.div<NavegationProps>`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
`

const NavigationLinksSidebar = styled.div<NavegationProps>`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 50px;
  }
`

const NavigationContainer = styled.div<NavegationProps>`
  height: 45px;
  width: max-content;
  display: flex;
  align-items: center;
`
const NavigationContainerButtons = styled.div<NavegationProps>`
  height: max-content;
  width: max-content;
  align-items: center;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  button {
    max-height: 35px;
    margin: 0 10px;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 500;
  }
`

const OrganismNavigation: FC<NavegationProps> = () => {
  const { t } = useTranslation('common')
  const [sidebar, setSidebar] = useState(false)
  return (
    <Navigation>
      <AtomContainer fullwidth alignItems="center" justifyContent="space-between">
        <NavigationContainer>
          <NavigationLogo>
            <LinkNext href="/">
              <a href="">
                <AtomIcon icon="stacklycodelogo" />
              </a>
            </LinkNext>
          </NavigationLogo>

          <NavigationLinks>
            <LinkNext href="/team">
              <NavigationLink>{t('nav-tag-1')}</NavigationLink>
            </LinkNext>
            <LinkNext href="/team">
              <NavigationLink>{t('nav-tag-3')}</NavigationLink>
            </LinkNext>
            <LinkNext href="/resources">
              <NavigationLink>{t('nav-tag-4')}</NavigationLink>
            </LinkNext>
            {/*             <LinkNext href="/live">
              <NavigationLink>{ t("nav-tag-2")}</NavigationLink>
            </LinkNext>
            <LinkNext href="/about">
              <NavigationLink>{ t("nav-tag-5")}</NavigationLink>
            </LinkNext>
            <LinkNext href="/community">
              <NavigationLink>{ t("nav-tag-6")}</NavigationLink>
            </LinkNext> */}
            <MoleculesNavSetting />
          </NavigationLinks>
        </NavigationContainer>
        <IconSideBar onClick={() => setSidebar(!sidebar)}>
          <AtomIcon icon="menu" />
        </IconSideBar>
        <NavigationContainerButtons>
          <AtomButton link="/login">Login</AtomButton>
          <AtomButton outline link="/signup">
            Sign Up
          </AtomButton>
          <MoleculesSetting />
        </NavigationContainerButtons>
      </AtomContainer>
      {sidebar && (
        <SideBar>
          <NavigationLinksSidebar>
            <ContainerSideBar />
            <LinkNext href="/live">
              <NavigationLink>{t('nav-tag-2')}</NavigationLink>
            </LinkNext>
            <LinkNext href="/team">
              <NavigationLink> {t('nav-tag-3')}</NavigationLink>
            </LinkNext>
            <LinkNext href="/resources">
              <NavigationLink>{t('nav-tag-4')}</NavigationLink>
            </LinkNext>
            <LinkNext href="/about">
              <NavigationLink>{t('nav-tag-5')}</NavigationLink>
            </LinkNext>
            <LinkNext href="/community">
              <NavigationLink>
                {t('nav-tag-6')} <AtomIcon color="white" icon="new" />
              </NavigationLink>
            </LinkNext>
          </NavigationLinksSidebar>
        </SideBar>
      )}
    </Navigation>
  )
}

export default OrganismNavigation
