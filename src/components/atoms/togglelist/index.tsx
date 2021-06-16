import { FC, useEffect, useState, MouseEvent } from 'react'
import styled from '@emotion/styled'
import AtomIcon from '@Atoms/icon'

type ToggleListProps = {
  outline?: boolean
  object?: { title: string; options: string[] }
  toggle?: boolean
}

const ToggleListStyled = styled.div<ToggleListProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 35px;
  border-radius: 3px;
  align-self: baseline;
  cursor: pointer;
  ${({ theme }) =>
    theme && {
      backgroundColor: theme.colors.primary.base,
      border: `solid 1px ${theme.colors.primary.base}`,
    }}
  ${({ theme, outline }) =>
    outline && {
      backgroundColor: 'transparent',
      border: `solid 1px ${theme.colors.primary.base}`,
    }}
  transition: all .5s ease;
`

const ContainerTitleStyled = styled.div<ToggleListProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-evenly;
  ${({ theme, outline, toggle }) =>
    outline &&
    toggle && {
      backgroundColor: 'transparent',
      borderBottom: `solid 2px ${theme.colors.white}`,
    }}
  span {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary.base};
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }
  div {
    svg {
      margin-right: 5px;
      height: 9px;
      width: 9px;
      path {
        fill: ${({ theme }) => theme.colors.primary.base};
        stroke: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
`
const ContainerOptionsStyled = styled.div<ToggleListProps>`
  position: absolute;
  top: 33px;
  left: -1px;
  border: solid 1px ${({ theme }) => theme.colors.primary.base};
  display: flex;
  flex-direction: column;
  width: 80px;
  height: max-content;
  button {
    padding: 8px 0px;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary.base};
    background-color: ${({ theme }) => theme.colors.secondary.base};
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    :hover {
      cursor: pointer;
      background-color: #414e6a;
      ${({ theme, outline }) =>
        outline && {
          backgroundColor: theme.colors.secondary.base,
          color: theme.colors.primary.base,
        }}
    }
  }
`

const AtomToggleList: FC<ToggleListProps> = ({ outline, object }) => {
  const [toggle, settoggle] = useState(false)
  const [option, setoption] = useState('')

  function clickOption(e: MouseEvent<HTMLSpanElement>) {
    const eGet = e.target as HTMLSpanElement
    const optionGet = eGet.innerText.toLowerCase()
    localStorage.setItem('language', optionGet)
    setoption(optionGet)
    /*  Function to Do */
  }
  useEffect(() => {
    setoption('ES')
  }, [])
  return (
    <ToggleListStyled outline={outline} onClick={() => settoggle(!toggle)}>
      <ContainerTitleStyled outline={outline} toggle={toggle}>
        <span>{option || object?.options[0]}</span>
        <AtomIcon name="arrow" variant="filled" />
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
  )
}

export default AtomToggleList
