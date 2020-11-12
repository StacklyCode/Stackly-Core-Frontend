import React from 'react';
import styled from '@Styles/styled';
import Link from 'next/link';

type ButtonProps = {
  color?: 'primary' | 'secondary';
  outline?: boolean;
  link?: string;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
};

const Button = styled.button<ButtonProps>`
  /* StyleComponent Style with Theme*/
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
    border: `2px solid ${theme.colors.primary.base}`,
    width: 'max-content',
    color: theme.colors.white,
    backgroundColor: theme.colors.primary.base,
    padding: '10px 20px',
    borderRadius: '4px',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.primary.light
    }
  })}

  /* If Primary */
  ${({ color, theme }) =>
    color === 'primary' && {
      border: `2px solid ${theme.colors.accent.green.base}`,
      backgroundColor: theme.colors.accent.green.base,
      ':hover': {
        backgroundColor: theme.colors.accent.green.dark,
        border: `2px solid ${theme.colors.accent.green.dark}`
      }
    }}

    /* If Outline */
  ${({ outline, theme }) =>
    outline && {
      backgroundColor: 'transparent',
      border: `2px solid ${theme.colors.white}`,
      ':hover': {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.colors.accent.blue.base}`,
        color: theme.colors.accent.blue.base
      }
    }}


  transition: all 0.3s ease-out;
  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    background: ${({ outline, theme }) =>
      outline ? `${theme.colors.primary.light}66` : `rgba(255, 255, 255, 0.4)`};
    animation: ripple-animation 2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  @keyframes ripple-animation {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const AtomButton: React.FC<ButtonProps> = ({ color, children, outline, link, href, type }) => {
  const ButtonRipple = (e: React.MouseEvent) => {
    const activeRef = e.currentTarget;
    if (activeRef) {
      const posX = e.pageX - activeRef.getBoundingClientRect().left;
      const posY = e.pageY - activeRef.getBoundingClientRect().top;
      const waveWidth = 1.5 * activeRef.getBoundingClientRect().width;
      const divRippleEffect = document.createElement('div');

      divRippleEffect.className = 'ripple-effect';
      divRippleEffect.style.width = `${waveWidth}px`;
      divRippleEffect.style.height = `${waveWidth}px`;
      divRippleEffect.style.left = `${posX - waveWidth / 2}px`;
      divRippleEffect.style.top = `${posY - waveWidth / 2}px`;
      activeRef.appendChild(divRippleEffect);
      window.setTimeout(() => {
        activeRef.removeChild(divRippleEffect);
      }, 2000);
    }
  };
  if (link) {
    return (
      <Link href={link}>
        <Button color={color} outline={outline}>
          {children}
        </Button>
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href}>
        <Button color={color} outline={outline}>
          {children}
        </Button>
      </a>
    );
  }
  return (
    <Button onClick={ButtonRipple} type={type} color={color} outline={outline}>
      {children}
    </Button>
  );
};

export default AtomButton;
