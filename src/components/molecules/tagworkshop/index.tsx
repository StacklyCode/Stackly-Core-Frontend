import styled from '@emotion/styled'
import AtomTitle from '@Src/components/atoms/title'
import { FC } from 'react'

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

const ContainerTagStyled = styled.div`
  display: flex;
  max-height: 350px;
  max-width: 1000px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`
const ContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    width: 20px;
  }
`
const ImageStyled = styled.img`
  max-height: 350px;
  max-width: 350px;
  height: 100%;
`

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
        <div>
          <div>
            {categories.map((e) => (
              <span>{e}</span>
            ))}
          </div>
          {islive && <span>LIVE in 2 Hours</span>}
        </div>
        <AtomTitle size="SubTitleLarge" bold>
          {name}
        </AtomTitle>
        <div>
          <span>{info.date}</span>
          <span>{info.duration / 60} Hours</span>
          <span>{info.views} Views</span>
          <span>{info.likes} Likes</span>
        </div>
        <span>{desc}</span>
        <div>
          <div>
            <img src={user.img} alt="" />
            <div>
              <span> {user.name}</span>
              <span>{user.desc}</span>
              <div>
                {user.socialNetwork.map((e) => (
                  <span>{e.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span>heart</span>
            <span>arrowdown</span>
            <span>arrowup</span>
          </div>
        </div>
      </ContainerInfoStyled>
      <ImageStyled src={img} alt="" />
    </ContainerTagStyled>
  )
}

export default MoleculeTagWorkshop
