import styled from '@emotion/styled'

export const CommentRoot = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 16px;

  img {
    flex-shrink: 0;
  }
`

export const HeadingBox = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 8px;
`

export const BodyContentBox = styled.div`
  margin: 6px 0;
`

export const ActionsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }

  & > p,
  svg {
    cursor: pointer;
  }
`

export const PipeSeparator = styled.span`
  height: 14px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  margin: 0 4px;
`

export const PointSeparator = styled.span`
  width: 4px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
`
