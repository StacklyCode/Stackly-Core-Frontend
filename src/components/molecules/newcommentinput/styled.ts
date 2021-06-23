import styled from '@emotion/styled'

export const NewCommentRoot = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`

export const InputBox = styled.div`
  flex: 1;
  background-color: #eeeff2;
  border-color: #eeeff2;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  /* input styles override */
  & > div {
    width: 100%;
    background-color: inherit;
    border-color: inherit;
    position: relative;

    div:first-child {
      z-index: 1;
      display: inline-flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.gray[400]};

      svg {
        font-size: 1.5rem;
      }
    }

    label {
      width: 100%;
      margin-bottom: 0;
      background-color: inherit;
      border-color: inherit;

      input {
        background-color: inherit;
        border-color: inherit;
        margin-top: 0;
        height: 50px;

        ::placeholder {
          color: ${({ theme }) => theme.colors.gray[400]};
        }
      }
    }
  }

  & > button {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) !important;
    right: 16px;
    z-index: 1;
    max-width: initial;
    padding: 4px;
  }
`
