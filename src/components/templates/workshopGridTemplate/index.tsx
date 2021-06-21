import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

const WorkshopGridTemplateRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.secondary.light};
`

type WorkshopGridTemplateProps = {
  mediaContent?: ReactNode
  comments?: ReactNode
  chat?: ReactNode
  recommended?: ReactNode
}

const WorkshopGridTemplate: FC<WorkshopGridTemplateProps> = ({
  mediaContent,
  comments,
  chat,
  recommended,
}) => (
  <WorkshopGridTemplateRoot>
    <div>
      {mediaContent}
      {comments}
    </div>
    <aside>
      {chat}
      {recommended}
    </aside>
  </WorkshopGridTemplateRoot>
)

export default WorkshopGridTemplate
