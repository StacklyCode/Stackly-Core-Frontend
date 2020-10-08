import React from 'react';
import styled from '@Styles/styled';

type ButtonProps = {
  color?: 'primary' | 'secondary';
  outline?: boolean;
};

const Button = styled.div<ButtonProps>`
  /* StyleComponent Style with Theme*/
  ${({ theme }) => ({
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: 'bold',
    lineHeight: theme.texts.Button.LineHeight,
    width: 'max-content',
    color: theme.colors.white,
    backgroundColor: theme.colors.primary.base,
    padding: '14px 20px',
    borderRadius: '4px',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.primary.light
    }
  })}

  /* If Primary */
  ${({ color, theme }) =>
    color === 'primary' && {
      backgroundColor: theme.colors.accent.green.base,
      ':hover': {
        backgroundColor: theme.colors.accent.green.light
      }
    }}

    /* If Outline */
  ${({ outline, theme }) =>
    outline && {
      backgroundColor: 'transparent',
      border: `2px solid ${theme.colors.white}`,
      ':hover': {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.colors.accent.green.base}`,
        color: theme.colors.accent.green.base
      }
    }}

/* scss Style */
  transition: all 0.3s ease-out;
`;

const AtomButton: React.FC<ButtonProps> = ({ color, children, outline }) => {
  return (
    <Button color={color} outline={outline}>
      {children}
    </Button>
  );
};

export default AtomButton;
