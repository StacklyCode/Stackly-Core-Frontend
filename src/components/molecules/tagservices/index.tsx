import AtomBody from '@Atoms/body'
import AtomIcon, { IconProps } from '@Atoms/icon'
import AtomTitle from '@Atoms/title'

import styled from '@emotion/styled'
import { FC } from 'react'

type TagsProps = {
  icon: Pick<IconProps, 'name' | 'variant'>
  title?: string
  description?: string
}

const Tags = styled.article<Omit<TagsProps, 'icon'>>`
  width: 180px;
  height: 250px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.mediaquery.small} {
    align-items: flex-start;
    width: 240px;
    height: 240px;
    padding: 20px 30px;
  }
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.light};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    span:first-child {
      background-color: ${({ theme }) => theme.colors.accent.primary.base};
      svg {
        color: ${({ theme }) => theme.colors.secondary.base};
      }
    }
  }
  span:first-child {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    border-radius: 10px;
    width: 72px;
    height: 72px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    svg {
      transition: all 0.3s ease;
    }
  }
  h2 {
    line-height: 20px;
  }
  transition: all 0.3s ease;
`

const MoleculesTagServices: FC<TagsProps> = ({ icon, title, description }) => {
  return (
    <Tags>
      <AtomIcon name={icon.name} variant={icon.variant} size="3x" color="primary" />
      <AtomTitle align="left" as="span" size="SubTitleMedium" color="black" bold>
        {title || 'Some Title'}
      </AtomTitle>
      <AtomBody align="left" size="BodySmall" color="light">
        {description || 'Marketing strategies to bring a fresh and modern identity for your brand.'}
      </AtomBody>
    </Tags>
  )
}

export default MoleculesTagServices
