import styled from '@emotion/styled'

export const ChatRoot = styled.section`
  box-shadow: 0 0 0 0.4px ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: hidden;
`

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.4px 0 0 ${({ theme }) => theme.colors.gray[200]};
  padding: 16px 24px 12px 24px;
`

export const TitleBox = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  h5 {
    margin-right: 10px;
  }

  div {
    display: inline-flex;
    align-items: center;
  }
`

export const ViewsBox = styled.div`
  display: inherit;
  align-items: center;

  p {
    margin-left: 6px;
  }
`

export const CommentsBox = styled.ul`
  padding: 24px 24px 0 24px;
  display: grid;
  gap: 20px;

  li:last-child {
    padding-bottom: 24px;
  }
`
