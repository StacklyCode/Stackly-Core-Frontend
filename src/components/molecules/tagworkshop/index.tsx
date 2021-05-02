import { FC } from 'react'
import AtomTitle from '@Src/components/atoms/title'
import AtomBody from '@Src/components/atoms/body'
import AtomIcon from '@Src/components/atoms/icon'
import {
  ContainerInfoStyled,
  ContainerTagStyled,
  ImageBox,
  ImageStyled,
  HeaderBox,
  ContentBox,
  CategoriesBox,
  Category,
  ScheduledTime,
  InformationBox,
  BottomContentBox,
  UserInfoBox,
  UserNetworksBox,
  UserAvatar,
  ActionsBox,
  IconButton,
} from './styled'

type TagWorkshopProps = {
  name: string
  desc: string
  img: string
  islive: boolean
  info: {
    date: string
    duration: number
    views: number
    likes: number
  }
  categories: string[]
  user: {
    img: string
    name: string
    desc: string
    socialNetwork: { name: string; url: string }[]
  }
}

const MoleculeTagWorkshop: FC<TagWorkshopProps> = ({
  name,
  desc,
  categories,
  img,
  info,
  islive,
  user,
}) => {
  return (
    <ContainerTagStyled>
      <ContainerInfoStyled>
        <HeaderBox>
          <CategoriesBox>
            {categories.map((e, idx) => (
              <Category key={`${e}-${idx}`}>{e}</Category>
            ))}
          </CategoriesBox>
          {islive && <ScheduledTime>LIVE in 2 Hours</ScheduledTime>}
        </HeaderBox>
        <ContentBox>
          <AtomTitle size="SubTitleLarge" align="left" bold>
            {name}
          </AtomTitle>
          <InformationBox>
            <AtomBody align="left" size="BodySmall">
              {info.date}
            </AtomBody>
            <AtomBody align="left" size="BodySmall">
              {info.duration / 60} Hours
            </AtomBody>
            <AtomBody align="left" size="BodySmall">
              {info.views} Views
            </AtomBody>
            <AtomBody align="left" size="BodySmall">
              {info.likes} Likes
            </AtomBody>
          </InformationBox>
          <AtomBody align="left" size="BodyMedium" color="light">
            {desc}
          </AtomBody>
        </ContentBox>
        <BottomContentBox>
          <UserInfoBox>
            <UserAvatar src={user.img} alt="user-avatar" />
            <div>
              <AtomTitle align="left" size="SubTitleSmall" bold>
                {user.name}
              </AtomTitle>
              <AtomBody align="left" size="BodyExtraSmall" color="light">
                {user.desc}
              </AtomBody>
              <UserNetworksBox>
                {user.socialNetwork.map((e, idx) => (
                  <a href={e.url} target="_blank" rel="noreferrer">
                    <AtomIcon icon={e.name} size="14px" key={idx} />
                  </a>
                ))}
              </UserNetworksBox>
            </div>
          </UserInfoBox>
          <ActionsBox>
            <IconButton isTransparent>{/* heart */}</IconButton>
            <IconButton>{/* arrow-left */}</IconButton>
            <IconButton>{/* arrow-right */}</IconButton>
          </ActionsBox>
        </BottomContentBox>
      </ContainerInfoStyled>
      <ImageBox>
        <ImageStyled src={img} alt="image-workshop" />
      </ImageBox>
    </ContainerTagStyled>
  )
}

export default MoleculeTagWorkshop
