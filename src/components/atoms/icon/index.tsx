import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

type IconProps = {
  icon?: string;
  color?: 'dark' | 'light' | 'grey' | 'white';
  size?: string;
};

const IconStyled = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => size && { width: size, height: size }}
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${({ theme, color }) =>
        color === 'white' ? theme.colors.secondary.base : theme.colors.primary.base};
    }
  }
`;

const AtomIcon: React.FC<IconProps> = ({ icon, size, color }) => {
  const DynamicIcon = dynamic(() =>
    import(`@Assets/icons/${icon}.svg`).catch(() => {
      return false;
    })
  );

  if (DynamicIcon) {
    return (
      <IconStyled size={size} color={color}>
        <DynamicIcon />
      </IconStyled>
    );
  }

  return null;
};

export default AtomIcon;
