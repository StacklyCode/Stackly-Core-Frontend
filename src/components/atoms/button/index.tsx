import Link from '@Src/utils/link'
import { FC } from 'react'
import { ButtonStyled } from './styled'
import { ButtonProps } from './types'

const AtomButton: FC<ButtonProps> = ({ color, children, outline, link, href, type }) => {
  return link ? (
    <Link to={link}>
      <ButtonStyled color={color} outline={outline}>
        {children || 'Default Text'}
      </ButtonStyled>
    </Link>
  ) : href ? (
    <Link to={href} isExternal>
      <ButtonStyled color={color} outline={outline}>
        {children || 'Default Text'}
      </ButtonStyled>
    </Link>
  ) : (
    <ButtonStyled type={type} color={color} outline={outline}>
      {children || 'Default Text'}
    </ButtonStyled>
  )
}

export default AtomButton
