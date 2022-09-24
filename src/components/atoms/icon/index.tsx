/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import dynamic from 'next/dynamic'
import { FC } from 'react'
// eslint-disable-next-line import/no-cycle
import SvgBox from './styled'

export type IconProps = {
  name: string
  variant: 'outlined' | 'filled'
  color?: 'primary' | 'secondary' | 'white' | 'gray'
  size?: 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | number
  className?: string
}

const AtomIcon: FC<IconProps> = ({ name, variant, size, color, className }) => {
  const DynamicIcon = dynamic(() =>
    import(`../../../assets/icons/${name}-${variant || 'filled'}.svg`).catch(() => {
      return false
    })
  ) as any

  if (DynamicIcon) {
    return (
      <SvgBox color={color} size={size}>
        <DynamicIcon viewBox="0 0 24 24" fill="currentColor" className={className} />
      </SvgBox>
    )
  }

  return null
}

export default AtomIcon
