import { Swiper } from 'swiper/react'
import styled from '@emotion/styled'

const SwiperStyled = styled(Swiper)`
  padding-top: 35px;

  .swiper-pagination-bullets {
    bottom: auto;
    top: 0;
    width: max-content;
    right: 0;
    left: initial;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: transparent;
    border: 1px solid #cbcbcb;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #e14a4a;
    border-color: #e14a4a;
  }
`

export default SwiperStyled
