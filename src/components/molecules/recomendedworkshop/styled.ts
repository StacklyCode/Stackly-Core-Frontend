import AtomIcon from '@Src/components/atoms/icon'
import styled from '@emotion/styled'

export const WorkshopCardBox = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 12px;

  & > div:last-child {
    flex: 1;
  }

  ${({ fullWidth }) =>
    fullWidth && {
      width: '100%',
      maxWidth: '100%',
    }}
`

export const ImageBox = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const HeartIcon = styled(AtomIcon)`
  color: ${({ theme }) => theme.colors.accent.red.base};
  margin-left: 4px;
`

export const InformationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;

  & > :last-child {
    display: inline-flex;
    align-items: center;
  }
`

export const PointSeparator = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.light};
`
