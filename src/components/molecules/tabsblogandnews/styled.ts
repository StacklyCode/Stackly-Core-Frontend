import styled from '@emotion/styled'

export const TabsBox = styled.ul`
  display: flex;
`

export const Tab = styled.button<{ isActive?: boolean }>`
  background-color: transparent;
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.primary.base};
  font-size: ${({ theme }) => theme.texts.SubTitleExtraSmall.FontSize};
  font-family: ${({ theme }) => theme.texts.SubTitleExtraSmall.FontFamily};
  font-weight: 500;
  padding: 6px 20px;
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive && {
      color: '#fff',
      backgroundColor: theme.colors.primary.base,
    }}
`
