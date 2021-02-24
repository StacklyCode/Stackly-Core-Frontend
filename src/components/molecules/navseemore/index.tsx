import AtomBody from "@Atoms/body";
import AtomIcon from "@Atoms/icon";
import AtomTitle from "@Atoms/title";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSpring, animated, useTransition, useChain } from "react-spring";
import { css } from "@emotion/react";
import { useEffect, useRef, useState, useCallback } from "react";

const NavigationSeeMore = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: 20px;
  div {
    margin-top: 2px;
  }

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

const NavigationSettings = styled(animated.div)`
  height: max-content;
  width: 180px;
  position: absolute;
  top: 30px;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 20px 10px;
  h6 {
    font-size: 13px;
    width: 100%;
    padding: 10px 20px 10px 20px;
  }
`;

const NavigationSettingsOption = styled(animated.div)`
  p {
    font-size: 12px;
  }
  padding: 5px 0px;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
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

function useOutsideAlerter(ref: any, [toggle, settoggle]: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        settoggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const MoleculesNavSetting: React.FC = ({}) => {
  const [toggle, settoggle] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, [toggle, settoggle]);

  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    delay: 100,
  });

  return (
    <NavigationSeeMore ref={wrapperRef} onClick={() => settoggle(!toggle)}>
      <AtomIcon icon="dots" />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <NavigationSettings key={key} style={props}>
              {data.map((item) => (
                <>
                  <AtomTitle size="SubTitleSmall" align="center" bold>
                    {item.name}
                  </AtomTitle>
                  {item.data.map((item) => (
                    <Link href={item.link}>
                      <NavigationSettingsOption key={key}>
                        <AtomBody size="BodySmall">{item.name}</AtomBody>
                      </NavigationSettingsOption>
                    </Link>
                  ))}
                </>
              ))}
            </NavigationSettings>
          )
      )}
    </NavigationSeeMore>
  );
};

export default MoleculesNavSetting;
