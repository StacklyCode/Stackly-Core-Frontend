import AtomBody from '@Atoms/body'
import AtomIcon from '@Atoms/icon'
import AtomTitle from '@Atoms/title'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Dispatch, FC, RefObject, useEffect, useRef, useState } from 'react'

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
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
  }
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary.base};
  }
`

const NavigationSettings = styled(motion.div)`
  height: max-content;
  width: 180px;
  position: absolute;
  top: 30px;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding: 10px 10px 20px 10px;
  h6 {
    font-size: 13px;
    width: 100%;
    padding: 10px 20px 10px 15px;
  }
`

const NavigationSettingsOptionContainer = styled(motion.div)`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const NavigationSettingsOption = styled.div`
  p {
    font-size: 12px;
  }
  padding: 5px 0px;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`
const OptionsContainer = styled.div`
  display: flex;
  width: 100%;
`

const data = [
  {
    name: 'GENERAL',
    data: [
      { name: 'Nosotros', link: '/about' },
      { name: 'Comunidad', link: '/community' },
    ],
  },
]

function useOutsideAlerter(ref: RefObject<HTMLDivElement>, settoggle: Dispatch<boolean>) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        settoggle(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, settoggle])
}

const MoleculesNavSetting: FC = () => {
  const [toggle, settoggle] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, settoggle)

  return (
    <NavigationSeeMore ref={wrapperRef} onClick={() => settoggle(!toggle)}>
      <AtomIcon name="dots" variant="filled" color="primary" />
      <AnimatePresence>
        {toggle && (
          <NavigationSettings
            key="NavigationSettings"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {data.map((item, index) => (
              <NavigationSettingsOptionContainer
                key={`NavigationSettingsOptionContainer${index}`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
              >
                <div>
                  <AtomTitle key={item.name} size="SubTitleSmall" align="center" bold>
                    {item.name}
                  </AtomTitle>
                </div>
                <OptionsContainer>
                  {item.data.map((itemChild) => (
                    <Link href={itemChild.link} key={itemChild.name}>
                      <NavigationSettingsOption key={itemChild.name}>
                        <AtomBody size="BodySmall">{itemChild.name}</AtomBody>
                      </NavigationSettingsOption>
                    </Link>
                  ))}
                </OptionsContainer>
              </NavigationSettingsOptionContainer>
            ))}
          </NavigationSettings>
        )}
      </AnimatePresence>
    </NavigationSeeMore>
  )
}

export default MoleculesNavSetting
