import AtomBody from '@Atoms/body'
import AtomIcon from '@Atoms/icon'
import AtomSwitch from '@Src/components/atoms/switch'
import styled from '@emotion/styled'
import { useEffect, useRef, useState, FC, RefObject, Dispatch } from 'react'

const SettingsNavigation = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    cursor: pointer;
  }
  div {
    margin-top: 2px;
    width: 100%;
    height: 100%;
  }
`

const SettingsOptionsNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: max-content;
`
const SettingsOptionsNavigation = styled.div`
  top: 95px;
  right: 90px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: max-content;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
  padding: 5px 10px;
  user-select: none;
`

const ToggleContainerOption = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px 0px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary.base};
  }
`

const ToggleContainerOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: max-content;
  p {
    margin-left: 10px;
  }
`

const AtomIconStyled = styled(AtomIcon)`
  color: ${({ theme }) => theme.colors.primary.light};
`

function useOutsideAlerter(
  ref: RefObject<HTMLDivElement>,
  settoggle: Dispatch<boolean>,
  setoption: Dispatch<number>,
  ref2: RefObject<HTMLDivElement>
) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        ref2.current &&
        !ref2.current.contains(event.target)
      ) {
        settoggle(false)
        setoption(0)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, ref2, setoption, settoggle])
}

const MoleculesSetting: FC = () => {
  const [toggle, settoggle] = useState(false)
  const [option, setoption] = useState(0)
  const wrapperRef = useRef(null)
  const wrapperRef2 = useRef(null)
  useOutsideAlerter(wrapperRef, settoggle, setoption, wrapperRef2)

  return (
    <>
      <SettingsNavigation ref={wrapperRef} onClick={() => settoggle(!toggle)}>
        <AtomIcon name="chevrondown" variant="filled" />
      </SettingsNavigation>
      {toggle && (
        <SettingsOptionsNavigation ref={wrapperRef2}>
          {option === 0 && (
            <SettingsOptionsNavigationContainer>
              <ToggleContainerOption>
                <ToggleContainerOptionContainer>
                  <AtomIconStyled name="user" variant="outlined" />
                  <AtomBody size="BodySmall">My Profile</AtomBody>
                </ToggleContainerOptionContainer>
                {/* <AtomIcon icon="" /> */}
              </ToggleContainerOption>
              <ToggleContainerOption onClick={() => setoption(1)}>
                <ToggleContainerOptionContainer>
                  <AtomIconStyled name="settings" variant="filled" />
                  <AtomBody size="BodySmall">Configuration</AtomBody>
                </ToggleContainerOptionContainer>
                <AtomIcon name="chevrondown" variant="filled" />
              </ToggleContainerOption>
            </SettingsOptionsNavigationContainer>
          )}
          {option === 1 && (
            <SettingsOptionsNavigationContainer>
              <ToggleContainerOption onClick={() => setoption(0)}>
                <ToggleContainerOptionContainer>
                  <AtomIconStyled name="arrowleft" variant="filled" />
                  <AtomBody size="BodySmall">back</AtomBody>
                </ToggleContainerOptionContainer>
                {/* <AtomIcon icon="" /> */}
              </ToggleContainerOption>
              <ToggleContainerOption>
                <ToggleContainerOptionContainer>
                  <AtomIconStyled name="brush" variant="outlined" />
                  <AtomBody size="BodySmall">Dark Mode</AtomBody>
                </ToggleContainerOptionContainer>
                {/* <AtomIcon icon="" /> */}
                <AtomSwitch />
              </ToggleContainerOption>
              <ToggleContainerOption>
                <ToggleContainerOptionContainer>
                  <AtomIconStyled name="language" variant="outlined" />
                  <AtomBody size="BodySmall">Language</AtomBody>
                </ToggleContainerOptionContainer>
                {/* <AtomIcon icon="" /> */}
              </ToggleContainerOption>
            </SettingsOptionsNavigationContainer>
          )}
        </SettingsOptionsNavigation>
      )}
    </>
  )
}

export default MoleculesSetting
