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
} from './styled'

type InstructorCardProps = {
  fullWidth?: boolean
  category?: string
  instructor?: string
  info?: {
    views: number
    likes: number
  }
}

const InstructorCard: FC<InstructorCardProps> = ({ fullWidth, category, instructor, info }) => (
  <InstructorCardBox fullWidth={fullWidth}>
    <Image
      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      alt=""
    />
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
