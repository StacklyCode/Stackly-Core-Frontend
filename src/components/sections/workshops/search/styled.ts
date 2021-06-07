import styled from '@emotion/styled'

export const SearchBox = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.base};
  min-height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mediaquery.small} {
    min-height: 240px;
  }
`

export const InputSearchBox = styled.div`
  width: 100%;

  & > div {
    width: 100%;

    label {
      width: 100%;
      margin: 0;
      min-width: auto;

      input {
        margin: 0;
      }
    }
  }

  ${({ theme }) => theme.mediaquery.small} {
    max-width: 530px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaquery.large} {
    max-width: 770px;
  }
`
