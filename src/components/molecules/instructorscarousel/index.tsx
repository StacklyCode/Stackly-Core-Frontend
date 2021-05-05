import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import MoleculeInstructorCard from '@Src/components/molecules/instructorcard'
import SwiperStyled from './styled'

SwiperCore.use([Pagination])

type InstructorCarouselProps = {
  data?: {
    category?: string
    instructor?: string
    img?: string
    info?: {
      views: number
      likes: number
    }
  }[]
}

const InstructorsCarousel: FC<InstructorCarouselProps> = ({ data }) => (
  <SwiperStyled
    slidesPerView={4}
    spaceBetween={26}
    breakpoints={{}}
    pagination={{ clickable: true, type: 'bullets' }}
    observer
  >
    {Array.isArray(data) &&
      data.map((instructor, idx) => (
        <SwiperSlide key={idx}>
          <MoleculeInstructorCard {...instructor} />
        </SwiperSlide>
      ))}
  </SwiperStyled>
)

export default InstructorsCarousel
