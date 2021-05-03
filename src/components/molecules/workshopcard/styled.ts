import styled from '@emotion/styled'

export const WorkshopCardBox = styled.div<{ fullWidth?: boolean }>`
  max-width: 170px;
  ${({ fullWidth }) =>
    fullWidth && {
      width: '100%',
      maxWidth: '100%',
    }}
`

export const ImageBox = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;

  ::before {
    content: '';
    display: block;
    padding-top: 100%;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
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

export const InformationBox = styled.div`
  display: flex;
  margin-top: 3px;

  & > *:not(:last-child) {
    margin-right: 14px;
  }
`
