import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const PublishingCardBox = styled.div<{ fullWidth?: boolean }>`
  max-width: 226px;

  ${({ fullWidth }) =>
    fullWidth && {
      width: '100%',
      maxWidth: '100%',
    }}
`

export const ImageBox = styled.div`
  position: relative;
  margin-bottom: 14px;
  border-radius: 5px;
  overflow: hidden;

  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
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

export const InformationBox = styled.div<{ variant?: 'simple' }>`
  display: flex;
  margin-top: 10px;
  margin-bottom: 6px;

  & > *:not(:last-child) {
    margin-right: 14px;
  }

  & > * {
    color: #6a7fa8 !important;
  }

  ${({ variant }) =>
    variant === 'simple' &&
    css`
      & > *:not(:last-child) {
        margin-right: 7px;
        display: inline-flex;
        align-items: center;
      }

      & > *:not(:last-child)::after {
        content: '';
        display: inline-block;
        width: 2px;
        height: 2px;
        background-color: #6a7fa8;
        margin-left: 7px;
      }
    `}
`
