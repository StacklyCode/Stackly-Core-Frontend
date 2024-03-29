import styled from '@emotion/styled'
import { FC, useContext, useEffect, useState } from 'react'
import { Dark, Light } from '@Styles/theme'
import { ThemeUseContext } from '@Src/hooks/ThemeContext'

type SwitchProps = {
  check?: boolean
}

const SwitchLabelStyled = styled.label<SwitchProps>`
  margin-right: 20px;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`
const SwitchInputStyled = styled.input<SwitchProps>`
  opacity: 0;
  width: 0;
  height: 0;

  :checked {
    background-color: #2196f3;
  }

  :focus {
    box-shadow: 0 0 1px #2196f3;
  }

  :checked + :before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const SwitchSpanStyled = styled.span<SwitchProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, check }) => (check ? theme.colors.accent.primary.base : '#ccc')};
  -webkit-transition: 0.4s;
  transition: 0.4s;

  border-radius: 34px;

  :before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

const AtomSwitch: FC<SwitchProps> = () => {
  const [checked, setChecked] = useState(false)
  const { setTheme } = useContext(ThemeUseContext)
  useEffect(() => {
    setChecked(localStorage.getItem('theme') !== 'Light')
  }, [])
  return (
    <SwitchLabelStyled htmlFor="SwitchTheme">
      <SwitchInputStyled
        checked={checked}
        onChange={() => {
          setChecked(!checked)
          localStorage.setItem('theme', `${checked ? 'Light' : 'Dark'}`)
          setTheme(checked ? Light : Dark)
        }}
        type="checkbox"
        name="SwitchTheme"
        id="SwitchTheme"
      />
      <SwitchSpanStyled check={checked} />
    </SwitchLabelStyled>
  )
}

export default AtomSwitch
