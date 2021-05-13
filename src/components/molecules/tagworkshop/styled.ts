import styled from '@emotion/styled'

export const ContainerTagStyled = styled.div`
  display: flex;
  max-width: ${({ theme }) => `${theme.breakpoints.m}px`};
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`

export const ContainerInfoStyled = styled.div`
  padding: 48px;
  flex: 1;
`

export const ImageBox = styled.div`
  height: inherit;
  max-width: 350px;
`

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`

export const ContentBox = styled.div`
  max-width: 440px;
`

export const CategoriesBox = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`

export const Category = styled.span`
  background-color: #a2abbf;
  color: #fff;
  padding: 6px 20px;
  border-radius: 25px;
  font-family: ${({ theme }) => theme.texts.BodySmall.FontFamily};
  font-size: ${({ theme }) => theme.texts.BodySmall.FontSize};
`

export const ScheduledTime = styled.span`
  padding: 14px 20px;
  border-radius: 25px;
  background-color: #e9e9e9;
  font-size: ${({ theme }) => theme.texts.BodyExtraSmall.FontSize};
  font-family: ${({ theme }) => theme.texts.BodyExtraSmall.FontFamily};
  font-weight: 500;
  color: #8d959c;
  display: inline-flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #f24646;
    border-radius: 50%;
    margin-right: 8px;
  }
`

export const InformationBox = styled.ul`
  display: flex;
  margin: 14px 0;

  & > * {
    color: #8d959c !important;
    display: inline-flex;
    align-items: center;

    & > span {
      margin-right: 8px;
    }
  }

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

export const BottomContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
`

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 20px;
`

export const UserNetworksBox = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  width: max-content;
  margin-top: 4px;
`

export const ActionsBox = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 14px;
  }
`

export const IconButton = styled.button<{ isTransparent?: boolean }>`
  width: 34px;
  height: 34px;
  background-color: #e9e9e9;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  ${({ isTransparent }) =>
    isTransparent && {
      backgroundColor: 'transparent',
    }}

  &:first-of-type {
    color: ${({ theme }) => theme.colors.accent.red.base};
  }
`
