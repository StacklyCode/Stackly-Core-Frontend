import Link from '@Src/utils/link'
import { FC } from 'react'
import { ButtonStyled } from './styled'
import { ButtonProps } from './types'

const AtomButton: FC<ButtonProps> = ({ color, children, outline, link, href, type }) => {
  return link ? (
    <Link to={link}>
      <ButtonStyled
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.01 }}
        color={color}
        outline={outline}
      >
        {children || 'Default Text'}
      </ButtonStyled>
    </Link>
  ) : href ? (
    <Link to={href} isExternal>
      <ButtonStyled
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.01 }}
        color={color}
        outline={outline}
      >
        {children || 'Default Text'}
      </ButtonStyled>
    </Link>
  ) : (
    <ButtonStyled
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.01 }}
      type={type}
      color={color}
      outline={outline}
    >
      {children || 'Default Text'}
    </ButtonStyled>
  )
}

export default AtomButton
