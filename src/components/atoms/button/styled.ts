import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { ButtonProps } from './types'

export const ButtonStyled = styled(motion.button)<ButtonProps>`
  position: relative;
  overflow: hidden;
  max-width: 250px;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    max-width: max-content;
  }
  ${({ theme }) => ({
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: 'bold',
    lineHeight: theme.texts.Button.LineHeight,
    outline: 'none',
    border: `1px solid ${theme.colors.accent.primary.base}`,
    width: 'max-content',
    color: theme.colors.white,
    backgroundColor: theme.colors.accent.primary.base,
    padding: '15px 20px',
    borderRadius: '2px',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.accent.primary.dark,
    },
  })}

  ${({ theme, color }) =>
    color === 'primary' && {
      border: `1px solid ${theme.colors.accent.green.base}`,
      backgroundColor: theme.colors.accent.green.base,
      ':hover': {
        backgroundColor: theme.colors.accent.green.dark,
        border: `1px solid ${theme.colors.accent.green.dark}`,
      },
    }}
    
  ${({ theme, outline }) =>
    outline && {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors.accent.primary.base}`,
      color: theme.colors.accent.primary.base,
      fontWeight: 500,
      ':hover': {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.accent.blue.base}`,
        color: theme.colors.accent.blue.base,
      },
    }}




  transition: all 0.3s ease-out;
`

export const Button2Styled = styled.button<ButtonProps>``
