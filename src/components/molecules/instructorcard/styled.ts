import AtomIcon from '@Src/components/atoms/icon'
import styled from '@emotion/styled'

export const InstructorCardBox = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ fullWidth }) =>
    fullWidth && {
      width: '100%',
      maxWidth: '100%',
    }}
`

export const Badge = styled.span`
  position: absolute;
  top: 24px;
  left: 26px;
  background-color: #fff;
  padding: 3px 20px;
  border-radius: 25px;

  @media (max-width: 640px) {
    top: 12px;
    left: 12px;
  }
`

export const BackdropBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;

  &:hover {
    backdrop-filter: blur(5px);
    background-color: rgba(39, 52, 75, 0.74);
  }

  &:hover > div {
    transform: translateY(0);
  }
`

export const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(70px);
  transition: transform 0.25s;
  padding: 26px;

  h5 {
    color: #fff !important;
    margin-bottom: 2px;
    max-width: 200px;
    text-align: left !important;
  }

  @media (max-width: 640px) {
    padding: 12px;
    transform: translateY(46px);
  }
`

export const InformationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 20px;

  p {
    color: #fff !important;
  }

  p:last-child {
    display: inline-flex;
    align-items: center;
  }

  @media (max-width: 640px) {
    margin-top: 2px;
    margin-bottom: 10px;
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

export const AnchorView = styled.a`
  background-color: #fff;
  border: none;
  padding: 12px 6px;
  width: 100%;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.texts.SubTitleMedium.FontSize};
  font-family: ${({ theme }) => theme.texts.SubTitleMedium.FontFamily};

  @media (max-width: 640px) {
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: ${({ theme }) => theme.texts.SubTitleSmall.FontSize};
    font-family: ${({ theme }) => theme.texts.SubTitleSmall.FontFamily};
  }
`

export const HeartIcon = styled(AtomIcon)`
  color: ${({ theme }) => theme.colors.accent.red.base};
  margin-left: 4px;
`
