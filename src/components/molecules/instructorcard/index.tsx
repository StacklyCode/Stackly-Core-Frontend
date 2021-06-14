import { FC } from 'react'
import Link from 'next/link'
import AtomTitle from '@Src/components/atoms/title'
import AtomBody from '@Src/components/atoms/body'
import {
  InstructorCardBox,
  Image,
  Badge,
  BackdropBox,
  ContentBox,
  InformationBox,
  AnchorView,
  HeartIcon,
} from './styled'

type InstructorCardProps = {
  fullWidth?: boolean
  category?: string
  instructor?: string
  img?: string
  info?: {
    views: number
    likes: number
  }
}

const InstructorCard: FC<InstructorCardProps> = ({
  fullWidth,
  category,
  instructor,
  img,
  info,
}) => (
  <InstructorCardBox fullWidth={fullWidth}>
    <Image src={img} alt="img-instructor" />
    <Badge>
      <AtomBody size="BodyExtraSmall" bold>
        {category}
      </AtomBody>
    </Badge>
    <BackdropBox>
      <ContentBox>
        <AtomTitle size="SubTitleMedium" align="left" bold>
          {instructor}
        </AtomTitle>
        <InformationBox>
          <AtomBody size="BodySmall" align="left">
            {info?.views} Views
          </AtomBody>
          <AtomBody size="BodySmall" align="left">
            {info?.likes} Likes
            <HeartIcon name="heart" variant="filled" />
          </AtomBody>
        </InformationBox>
        <Link href="/">
          <AnchorView>View</AnchorView>
        </Link>
      </ContentBox>
    </BackdropBox>
  </InstructorCardBox>
)

export default InstructorCard
