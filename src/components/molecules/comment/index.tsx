import { FC, ReactNode } from 'react'
import AtomAvatar from '@Atoms/avatar'
import AtomTitle from '@Atoms/title'
import AtomBody from '@Atoms/body'
import AtomIcon from '@Atoms/icon'
import {
  CommentRoot,
  HeadingBox,
  BodyContentBox,
  ActionsBox,
  PipeSeparator,
  PointSeparator,
} from './styled'

type CommentProps = {
  publicationDate?: string
  image?: string
  username?: string
  body?: string
  showActions?: boolean
  actionsComponent?: ReactNode
}

const Comment: FC<CommentProps> = ({
  showActions = true,
  actionsComponent,
  publicationDate,
  username,
  image,
  body,
}) => (
  <CommentRoot>
    <AtomAvatar src={image} size="lg" alt="avatar-user" />
    <div>
      <HeadingBox>
        <AtomTitle size="SubTitleSmall" color="accent">
          {username}
        </AtomTitle>
        {publicationDate && (
          <AtomBody size="BodyExtraSmall" color="light">
            {publicationDate}
          </AtomBody>
        )}
      </HeadingBox>
      <BodyContentBox>
        <AtomBody align="left" size="BodySmall">
          {body}
        </AtomBody>
      </BodyContentBox>
      {actionsComponent ? (
        <>{actionsComponent}</>
      ) : showActions ? (
        <ActionsBox>
          <div>
            <AtomIcon name="chevronup" variant="filled" />
            <PipeSeparator />
            <AtomIcon name="chevrondown" variant="filled" />
          </div>
          <PointSeparator />
          <AtomBody size="BodySmall" color="light">
            Responder
          </AtomBody>
        </ActionsBox>
      ) : null}
    </div>
  </CommentRoot>
)

export default Comment
