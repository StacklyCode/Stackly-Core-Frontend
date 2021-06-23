import styled from '@emotion/styled'

export const PlayerBox = styled.div`
  padding-top: 56.25%;
  height: 0;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`

export const InfoBox = styled.div`
  display: flex;
  margin-top: 12px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray[200]};
  padding-bottom: 20px;
  width: 100%;
  column-gap: 16px;

  > div {
    flex: 1;
  }
`

export const HeadingInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray[200]};

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 6px;

    li:not(:first-child) {
      display: inherit;
      align-items: center;
      column-gap: 6px;
      color: ${({ theme }) => theme.colors.gray[400]};

      p {
        color: inherit;
      }
    }
  }

  button {
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-flex;
    align-items: center;

    span {
      display: inline-block;
      width: 3px;
      height: 3px;
      background-color: #fff;
      border-radius: 50%;
      margin: 0 6px;
    }
  }
`

export const BodyContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  > div p {
    max-width: 720px;
    width: 100%;
  }

  ul {
    display: flex;
    align-items: flex-start;
    gap: 32px;

    li {
      display: inherit;
      align-items: center;
      column-gap: 10px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary.base};

      p {
        color: inherit;
      }
    }
  }
`
