import { FC } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import MoleculeWorkshopCard from '@Src/components/molecules/workshopcard'
import SwiperStyled from './styled'

SwiperCore.use([Pagination])

type WorkshopsCarouselProps = {
  className?: string
  data?: {
    id: number | string
    name: string
    img: string
    info: {
      date: string
      views: number
      likes: number
    }
  }[]
}

const WorkshopsCarousel: FC<WorkshopsCarouselProps> = ({ data, className }) => (
  <SwiperStyled
    slidesPerView={4}
    className={className}
    spaceBetween={100}
    breakpoints={{}}
    pagination={{ clickable: true, type: 'bullets' }}
    observer
  >
    {Array.isArray(data) &&
      data.map(({ id, ...restData }) => (
        <SwiperSlide key={id}>
          <MoleculeWorkshopCard {...restData} fullWidth />
        </SwiperSlide>
      ))}
  </SwiperStyled>
)

export default WorkshopsCarousel
