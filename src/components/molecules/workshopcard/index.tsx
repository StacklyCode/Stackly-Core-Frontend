import { FC } from 'react'
import AtomTitle from '@Src/components/atoms/title'
import AtomBody from '@Src/components/atoms/body'
import { WorkshopCardBox, ImageBox, Image, InformationBox } from './styled'

type WorkshopCardProps = {
  name?: string
  img?: string
  info?: {
    date: string
    views: number
    likes: number
  }
  fullWidth?: boolean
}

const WorkshopCard: FC<WorkshopCardProps> = ({ name, img, info, fullWidth }) => (
  <WorkshopCardBox fullWidth={fullWidth}>
    <ImageBox>
      <Image src={img} alt={`${name}-img`} loading="lazy" />
    </ImageBox>
    <AtomTitle size="SubTitleMedium" bold align="left">
      {name}
    </AtomTitle>
    <InformationBox>
      <AtomBody size="BodyExtraSmall" color="light" align="left">
        {info?.date}
      </AtomBody>
      <AtomBody size="BodyExtraSmall" color="light" align="left">
        {info?.views} Views
      </AtomBody>
      <AtomBody size="BodyExtraSmall" color="light" align="left">
        {info?.likes} Likes
      </AtomBody>
    </InformationBox>
  </WorkshopCardBox>
)

export default WorkshopCard
