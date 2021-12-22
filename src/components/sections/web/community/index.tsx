import AtomBody from '@Atoms/body'
import AtomButton from '@Atoms/button'
import AtomContainer from '@Atoms/container'
import AtomTitle from '@Atoms/title'
import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { FC } from 'react'

const Community = styled.section`
  /* background: ${({ theme }) => theme.colors.white}; */
  background-color: ${({ theme }) => theme.colors.secondary.light};
  min-height: calc(100vh - 110px);
  display: flex;
  /* margin-top: 110px; */
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  /* background-color: transparent; */
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
`

const IllustrationContainer = styled.div`
  width: 35%;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 70%;
  }
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 60%;
  }

  h2 {
    margin-bottom: 20px;
  }
  a {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`

type ICommunity = {
  idScroll?: string
}

const OrganismCommunity: FC<ICommunity> = ({ idScroll }) => {
  const { t } = useTranslation('common')

  return (
    <Community id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            {t('community-title')}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            {t('community-desc')}
          </AtomBody>
          <AtomButton href="https://discord.stacklycode.com/">{t('community-button')}</AtomButton>
        </TextContainer>
        <IllustrationContainer>
          <Image
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=300"
            alt=""
            width={1600}
            height={1300}
          />
        </IllustrationContainer>
      </AtomContainer>
    </Community>
  )
}

export default OrganismCommunity
