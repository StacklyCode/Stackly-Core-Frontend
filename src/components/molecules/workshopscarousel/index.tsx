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
    slidesPerView={2}
    slidesPerColumnFill="column"
    slidesPerColumn={1}
    spaceBetween={40}
    className={className}
    breakpoints={{
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      1024: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        spaceBetween: 60,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 90,
      },
    }}
    pagination={{ clickable: true, type: 'bullets' }}
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
