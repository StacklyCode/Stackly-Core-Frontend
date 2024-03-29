import styled from '@emotion/styled'
import { Theme } from '@emotion/react'
// eslint-disable-next-line import/no-cycle
import { IconProps } from './index'

const sizes = {
  xs: 0.75,
  sm: 0.875,
  '1x': 1,
  '2x': 2,
  '3x': 3,
  '4x': 4,
}

const getColor = (color: IconProps['color'], theme: Theme) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary.base
    case 'secondary':
      return theme.colors.secondary.base
    case 'gray':
      return theme.colors.gray[500]
    case 'white':
      return theme.colors.white
    default:
      return color
  }
}

const SvgBox = styled.span<Omit<IconProps, 'name' | 'variant'>>`
  display: inline-flex;
  align-items: center;

  svg {
    width: 1em;
    height: 1em;
    font-size: 1em;

    ${({ size }) =>
      size && {
        fontSize: typeof size === 'string' ? `${sizes[size]}em` : `${size}px`,
      }}

    ${({ color, theme }) =>
      color && {
        color: getColor(color, theme),
      }}
  }

  svg path {
    fill: currentColor;
  }
`
export default SvgBox
