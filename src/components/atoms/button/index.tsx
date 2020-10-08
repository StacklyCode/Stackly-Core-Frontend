import React from 'react';
import styled from '@Styles/styled';

type ButtonProps = {
  color?: 'primary' | 'secondary';
  outline?: boolean;
};

const Button = styled.div<ButtonProps>`
  font-size: ${({ theme }) => theme.texts.Button.FontSize};
  font-family: ${({ theme }) => theme.texts.Button.FontFamily};
  font-weight: bold;
  line-height: ${({ theme }) => theme.texts.Button.LineHeight};
  width: max-content;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary.base};
  padding: 14px 20px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  ${({ color, theme }) =>
    color === 'primary' && {
      backgroundColor: theme.colors.accent.green.base,
      ':hover': {
        backgroundColor: theme.colors.accent.green.light
      }
    }}

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
