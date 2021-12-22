import AtomBody from '@Atoms/body'
import AtomIcon, { IconProps } from '@Atoms/icon'
import AtomTitle from '@Atoms/title'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FC } from 'react'

type TagsProps = {
  icon: Pick<IconProps, 'name' | 'variant'>
  title?: string
  description?: string
}

const Tags = styled(motion.article)<Omit<TagsProps, 'icon'>>`
  width: 190px;
  height: 270px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: space-evenly; */
  align-items: center;
  ${({ theme }) => theme.mediaquery.small} {
    align-items: flex-start;
    width: 270px;
    height: 270px;
    padding: 20px 30px;
  }
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.light};
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    span:first-of-type {
      background-color: ${({ theme }) => theme.colors.accent.primary.base};
      svg {
        color: ${({ theme }) => theme.colors.secondary.base};
      }
    }
  }
  span:first-of-type {
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
    <Tags
      whileHover={{ scale: 1, translateY: '-20px' }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.01 }}
    >
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
