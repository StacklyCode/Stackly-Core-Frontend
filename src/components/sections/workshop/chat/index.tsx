import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AtomTitle from '@Src/components/atoms/title'
import AtomBody from '@Src/components/atoms/body'
import AtomComment from '@Src/components/molecules/comment'
import AtomIcon from '@Src/components/atoms/icon'
import { ChatRoot, HeadingBox, TitleBox, ViewsBox, CommentsBox } from './styled'

const fakeComment = {
  username: 'Albert Diaz',
  image:
    'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  publicationDate: 'hace 2 dias',
  body: 'We will be in charge to bring your idea to life and give the best value for your users.',
}

const Chat: FC = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <ChatRoot>
      <HeadingBox>
        <TitleBox onClick={() => setOpen(!isOpen)}>
          <AtomTitle size="SubTitleMedium">Repeticion Chat</AtomTitle>
          <motion.div
            variants={{
              open: { transform: 'rotate(180deg)' },
              collapsed: { transform: 'rotate(0deg)' },
            }}
            animate={isOpen ? 'open' : 'collapsed'}
            exit="collapsed"
          >
            <AtomIcon name="chevronup" variant="filled" color="primary" size="xs" />
          </motion.div>
        </TitleBox>
        <ViewsBox>
          <AtomIcon name="users" variant="filled" color="primary" size={20} />
          <AtomBody size="BodySmall">21.000 Personas</AtomBody>
        </ViewsBox>
      </HeadingBox>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="comments"
            variants={{
              open: { height: 'auto', opacity: 1, overflowY: 'auto' },
              collapsed: { height: 0, opacity: 0, overflowY: 'hidden' },
            }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.5 }}
          >
            <CommentsBox>
              {Array.from({ length: 6 }, () => fakeComment).map((item) => (
                <li>
                  <AtomComment
                    image={item.image}
                    username={item.username}
                    body={item.body}
                    showActions={false}
                  />
                </li>
              ))}
            </CommentsBox>
          </motion.div>
        )}
      </AnimatePresence>
    </ChatRoot>
  )
}

export default Chat
