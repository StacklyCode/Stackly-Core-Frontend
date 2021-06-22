import { FC } from 'react'
import AtomTitle from '@Src/components/atoms/title'
import AtomBody from '@Src/components/atoms/body'
import {
  WorkshopCardBox,
  ImageBox,
  Image,
  InformationBox,
  HeartIcon,
  PointSeparator,
} from './styled'

type RecomendedWorkshopProps = {
  name?: string
  img?: string
  info?: {
    publicationDate?: string
    views?: number
    likes?: number
  }
  fullWidth?: boolean
}

const RecomendedWorkshop: FC<RecomendedWorkshopProps> = ({ name, img, info, fullWidth }) => (
  <WorkshopCardBox fullWidth={fullWidth}>
    <ImageBox>
      <Image src={img} alt={`${name}-img`} loading="lazy" />
    </ImageBox>
    <div>
      <AtomTitle size="SubTitleMedium" bold align="left">
        {name}
      </AtomTitle>
      <InformationBox>
        <AtomBody size="BodyExtraSmall" color="light" align="left">
          {info?.publicationDate}
        </AtomBody>
        <PointSeparator />
        <AtomBody size="BodyExtraSmall" color="light" align="left">
          {info?.views} Views
        </AtomBody>
        <PointSeparator />
        <AtomBody size="BodyExtraSmall" color="light" align="left">
          {info?.likes} Likes
          <HeartIcon name="heart" variant="filled" />
        </AtomBody>
      </InformationBox>
    </div>
  </WorkshopCardBox>
)

export default RecomendedWorkshop
