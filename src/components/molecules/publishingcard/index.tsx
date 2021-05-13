import { FC } from 'react'
import AtomTitle from '@Src/components/atoms/title'
import AtomBody from '@Src/components/atoms/body'
import AtomIcon from '@Src/components/atoms/icon'
import { PublishingCardBox, ImageBox, Image, InformationBox } from './styled'

type PublishingCardProps = {
  name?: string
  description?: string
  img?: string
  info?: {
    date?: string
    views?: number
    likes?: number
    duration?: number
  }
  fullWidth?: boolean
  variant?: 'default' | 'simple'
}

const InformationDefault: FC<PublishingCardProps['info']> = ({ date, likes, views, duration }) => (
  <InformationBox>
    <AtomBody size="BodyExtraSmall" align="left">
      <AtomIcon name="schedule" variant="outlined" size={14} />
      {date}
    </AtomBody>
    <AtomBody size="BodyExtraSmall" align="left">
      <AtomIcon name="clock" variant="outlined" size={14} />
      {duration} Hours
    </AtomBody>
    <AtomBody size="BodyExtraSmall" align="left">
      <AtomIcon name="thunder" variant="outlined" size={14} />
      {views} Views
    </AtomBody>
    <AtomBody size="BodyExtraSmall" align="left">
      <AtomIcon name="heart" variant="filled" size={14} />
      {likes} Likes
    </AtomBody>
  </InformationBox>
)

const InformationSimple: FC<PublishingCardProps['info']> = ({ date, views }) => (
  <InformationBox variant="simple">
    <AtomBody size="BodyExtraSmall" align="left">
      {date}
    </AtomBody>
    <AtomBody size="BodyExtraSmall" align="left">
      {views} Views
    </AtomBody>
  </InformationBox>
)

const PublishingCard: FC<PublishingCardProps> = ({
  fullWidth,
  name,
  description,
  img,
  info,
  variant = 'default',
}) => (
  <PublishingCardBox fullWidth={fullWidth}>
    <ImageBox>
      <Image src={img} alt="image-post" />
    </ImageBox>
    <AtomTitle size="SubTitleLarge" align="left" bold>
      {name}
    </AtomTitle>
    {variant === 'default' ? <InformationDefault {...info} /> : <InformationSimple {...info} />}
    {variant === 'default' ? (
      <AtomBody size="BodySmall" align="left" color="black">
        {description}
      </AtomBody>
    ) : null}
  </PublishingCardBox>
)

export default PublishingCard
