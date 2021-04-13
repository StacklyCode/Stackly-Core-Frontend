import { ButtonStyled } from './styled';
import Link from '@Src/utils/link';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  outline?: boolean;
  link?: string;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  text?: string;
};

const AtomButton: React.FC<ButtonProps> = ({
  color,
  children,
  outline,
  link,
  href,
  type,
}) => {
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
  );
};

export default AtomButton;
