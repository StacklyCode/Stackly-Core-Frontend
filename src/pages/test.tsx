import React from 'react';
import styled from '@Styles/styled';
import Button from '@Atoms/button';

type TextProps = {
  color: string;
};

const Text = styled.div<TextProps>`
  ${({ color, theme }) => ({
    color: color || '#000000',
    fontSize: '40px',
    fontFamily: theme.texts.Button.FontFamily
  })}
`;

const TestPage: React.FC = () => {
  return (
    <>
      <Button>Let’s start a project</Button>
      <Button color="primary">Let’s start a project</Button>
      <Button outline>Let’s start a project</Button>
      <Text color="blue">StyledCode</Text>
    </>
  );
};

export default TestPage;
