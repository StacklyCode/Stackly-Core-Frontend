import styled from '@emotion/styled'

export const InstructorCardBox = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  max-width: 266px;
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
  font-size: ${({ theme }) => theme.texts.SubTitleMedium.FontSize};
  font-family: ${({ theme }) => theme.texts.SubTitleMedium.FontFamily};
  font-weight: 600;
`
