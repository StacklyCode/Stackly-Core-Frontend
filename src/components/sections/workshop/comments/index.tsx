import { FC } from 'react'
import styled from '@emotion/styled'
import NewCommentInput from '@Molecules/newcommentinput'
import Comment from '@Molecules/comment'

const Section = styled.section`
  padding-top: 22px;
`

const CommentsBox = styled.ul`
  margin-top: 26px;
  display: grid;
  gap: 20px;
`

const fakeData = {
  username: 'Albert Diaz',
  image:
    'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  publicationDate: 'hace 2 dias',
  body:
    'We will be in charge to bring your idea to life and give the best value for your users.We will be in charge to bring your idea to life and give the best value for your users.',
}

const Comments: FC = () => (
  <Section>
    <NewCommentInput />
    <CommentsBox>
      {Array.from({ length: 4 }, () => fakeData).map((item) => (
        <li>
          <Comment
            username={item.username}
            image={item.image}
            publicationDate={item.publicationDate}
            body={item.body}
          />
        </li>
      ))}
    </CommentsBox>
  </Section>
)

export default Comments
