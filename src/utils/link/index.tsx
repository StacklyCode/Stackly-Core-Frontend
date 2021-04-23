import NexLink from 'next/link'
import { FC } from 'react'

type LinkProps = {
  to: string
  title?: string
  isExternal?: boolean
}

const Link: FC<LinkProps> = ({ to, isExternal, children, title }) => {
  if (isExternal)
    return (
      <NexLink href={to}>
        <a target="_blank" title={title} rel="noreferrer noopener nofollow">
          {children}
        </a>
      </NexLink>
    )

  return (
    <NexLink href={to}>
      <a target="_self" rel="noreferrer noopener nofollow" title={title}>
        {children}
      </a>
    </NexLink>
  )
}

export default Link
