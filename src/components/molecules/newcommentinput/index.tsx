import { FC } from 'react'
import AtomInput from '@Atoms/input'
import AtomAvatar from '@Atoms/avatar'
import AtomButton from '@Atoms/button'
import AtomIcon from '@Atoms/icon'
import { NewCommentRoot, InputBox } from './styled'

const NewCommentInput: FC = () => (
  <NewCommentRoot>
    <AtomAvatar
      src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="avatar-user"
      size="lg"
    />
    <InputBox>
      <AtomInput
        type="text"
        placeholder="Agregar un comentario..."
        icon="emoticon"
        iconVariant="filled"
      />
      <AtomButton>
        <AtomIcon name="send" variant="filled" />
      </AtomButton>
    </InputBox>
  </NewCommentRoot>
)

export default NewCommentInput
