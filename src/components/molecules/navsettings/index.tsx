import AtomBody from "@Atoms/body";
import AtomIcon from "@Atoms/icon";
import AtomTitle from "@Src/components/atoms/title";
import AtomSwitch from "@Src/components/atoms/switch";
import AtomToggleList from "@Atoms/togglelist";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSpring, animated, useTransition, useChain } from "react-spring";
import { useEffect, useRef, useState } from "react";

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
    width: 15px;
  }
`;

const SettingsOptionsNavigationContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: max-content;
`;
const SettingsOptionsNavigation = styled(animated.div)`
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
`;

const ToggleDarkModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ToggleContainer = styled.div`
  height: max-content;
  width: max-content;
  margin-right: 40px;
`;

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
  div:last-child {
    width: 15px;
    height: 15px;
    transform: rotate(-90deg);
  }
`;

const ToggleContainerOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: max-content;
  p {
    margin-left: 10px;
  }
  div {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.primary.base};
    svg {
      width: 15px;
      path {
        fill: ${({ theme }) => theme.colors.secondary.light};
      }
    }
  }
`;

const data = [
  {
    name: "GENERAL",
    data: [
      { name: "Contacto", link: "/link" },
      { name: "Nosotros", link: "/link" },
      { name: "Comunidad", link: "/link" },
    ],
  },
  {
    name: "AYUDA E INFORMACIÓN LEGAL",
    data: [
      { name: "Ayuda", link: "/link" },
      { name: "Politica de Privacidad", link: "/link" },
      { name: "Politica sobre cookies", link: "/link" },
      { name: "Terminos", link: "/link" },
    ],
  },
];

function useOutsideAlerter(
  ref: any,
  [toggle, settoggle]: any,
  [option, setoption]: any
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        settoggle(false);
        setoption(0);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const MoleculesSetting: React.FC = ({}) => {
  const [toggle, settoggle] = useState(false);
  const [option, setoption] = useState(0);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, [toggle, settoggle], [option, setoption]);

  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    delay: 100,
  });

  const optionAnim = useTransition(option, null, {
    from: { opacity: 0, transform: "translateX(-10px)" },
    enter: { opacity: 1, transform: "translateX(0px)", display: "flex" },
    leave: { opacity: 0, transform: "translateX(-10px)", display: "none" },
    delay: 100,
  });

  return (
    <>
      <SettingsNavigation ref={wrapperRef} onClick={() => settoggle(!toggle)}>
        <AtomIcon icon="arrow" />
      </SettingsNavigation>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <SettingsOptionsNavigation ref={wrapperRef} style={props}>
              {optionAnim.map(
                ({ item, key, props }) =>
                  item === 0 && (
                    <SettingsOptionsNavigationContainer style={props}>
                      <ToggleContainerOption>
                        <ToggleContainerOptionContainer>
                          <AtomIcon icon="user" />
                          <AtomBody size="BodySmall">My Profile</AtomBody>
                        </ToggleContainerOptionContainer>
                        <AtomIcon icon="" />
                      </ToggleContainerOption>
                      <ToggleContainerOption onClick={() => setoption(1)}>
                        <ToggleContainerOptionContainer>
                          <AtomIcon icon="settings" />
                          <AtomBody size="BodySmall">Configuration</AtomBody>
                        </ToggleContainerOptionContainer>
                        <AtomIcon icon="arrow" />
                      </ToggleContainerOption>
                    </SettingsOptionsNavigationContainer>
                  )
              )}
              {optionAnim.map(
                ({ item, key, props }) =>
                  item === 1 && (
                    <SettingsOptionsNavigationContainer style={props}>
                      <ToggleContainerOption onClick={() => setoption(0)}>
                        <ToggleContainerOptionContainer>
                          <AtomIcon icon="arrowleft" />
                          <AtomBody size="BodySmall">back</AtomBody>
                        </ToggleContainerOptionContainer>
                        <AtomIcon icon="" />
                      </ToggleContainerOption>
                      <ToggleContainerOption>
                        <ToggleContainerOptionContainer>
                          <AtomIcon icon="brush" />
                          <AtomBody size="BodySmall">Dark Mode</AtomBody>
                        </ToggleContainerOptionContainer>
                        <AtomIcon icon="" />
                        <AtomSwitch />
                      </ToggleContainerOption>
                      <ToggleContainerOption>
                        <ToggleContainerOptionContainer>
                          <AtomIcon icon="language" />
                          <AtomBody size="BodySmall">Language</AtomBody>
                        </ToggleContainerOptionContainer>
                        <AtomIcon icon="" />
                      </ToggleContainerOption>
                    </SettingsOptionsNavigationContainer>
                  )
              )}
            </SettingsOptionsNavigation>
          )
      )}
    </>
  );
};

export default MoleculesSetting;
