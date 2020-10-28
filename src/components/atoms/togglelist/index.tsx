import React, { useState } from 'react';
import styled from '@Styles/styled';
import AtomIcon from '@Atoms/icon';

type ToggleListProps = {
  outline?: boolean;
  object?: { title: string; options: string[] };
  toggle?: boolean;
};

const ToggleListStyled = styled.div<ToggleListProps>`
  /* StyleComponent Style with Theme*/
  display: flex;
  flex-direction: column;
  width: 100px;
  height: max-content;
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) =>
    theme && {
      backgroundColor: theme.colors.primary.dark,
      border: `solid 2px ${theme.colors.primary.dark}`
    }}
  ${({ theme, outline }) =>
    outline && {
      backgroundColor: 'transparent',
      border: `solid 2px ${theme.colors.white}`
    }}
  transition: all .5s ease;
`;

const ContainerTitleStyled = styled.div<ToggleListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, outline, toggle }) =>
    outline &&
    toggle && {
      backgroundColor: 'transparent',
      borderBottom: `solid 2px ${theme.colors.white}`
    }}
  span {
    padding: 10px 0px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }
  div {
    svg {
      height: 13px;
      path {
        fill: white;
        stroke: white;
      }
    }
  }
`;
const ContainerOptionsStyled = styled.div<ToggleListProps>`
  /* StyleComponent Style with Theme*/
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  button {
    padding: 8px 0px;
    display: flex;
    border: none;
    align-items: center;
    padding-left: 29px;
    justify-content: flex-start;
    color: white;
    background-color: #58698c;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    :hover {
      cursor: pointer;
      background-color: #414e6a;
      ${({ theme, outline }) =>
        outline && {
          backgroundColor: theme.colors.white,
          color: theme.colors.primary.base
        }}
    }
  }
`;

const AtomToggleList: React.FC<ToggleListProps> = ({ outline, object }) => {
  const [toggle, settoggle] = useState(false);
  const [option, setoption] = useState('');
  function clickOption(e: React.MouseEvent<HTMLSpanElement>) {
    const eGet = e.target as HTMLSpanElement;
    const optionGet = eGet.innerText;
    setoption(optionGet);
    /*  Function to Do */
  }
  return (
    <ToggleListStyled outline={outline} onClick={() => settoggle(!toggle)}>
      <ContainerTitleStyled outline={outline} toggle={toggle}>
        <span>{option || object?.options[0]}</span>
        <AtomIcon icon="arrow" />
      </ContainerTitleStyled>
      {toggle && (
        <ContainerOptionsStyled outline={outline}>
          {object?.options.map((e) => (
            <button type="button" onClick={clickOption} key={e}>
              {e}
            </button>
          ))}
        </ContainerOptionsStyled>
      )}
    </ToggleListStyled>
  );
};

export default AtomToggleList;
