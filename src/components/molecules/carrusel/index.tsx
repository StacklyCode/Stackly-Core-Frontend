import { Swiper, SwiperSlide } from 'swiper/react'
import { FC } from 'react'
import MoleculesTagProject from '@Src/components/molecules/tagprojects'

interface IProject {
  id?: string
  title?: string
  type?: string
  description?: string
  urlImage?: string
  link?: string
}

type TCarrusel = {
  data?: IProject[]
}

const MoleculeCarrusel: FC<TCarrusel> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop
      autoplay={{
        delay: 500,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data &&
        data?.map((item) => (
          <SwiperSlide
            key={item.title}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MoleculesTagProject
              key={item.id}
              title={item.title}
              img={item.urlImage}
              description={item.description}
              type={item.type}
              link={item.link}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default MoleculeCarrusel
