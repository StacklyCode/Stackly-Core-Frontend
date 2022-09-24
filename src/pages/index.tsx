import OrganismHero from '@Section/web/hero'
import TemplateMain from '@Templates/index'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import LazyLoad from 'react-lazyload'

const OrganismServices = dynamic(() => import('@Section/web/services')) as any
const OrganismProjects = dynamic(() => import('@Section/web/projects')) as any
const OrganismClients = dynamic(() => import('@Section/web/clients')) as any
const OrganismContact = dynamic(() => import('@Section/web/contact')) as any

type IProject = {
  id?: string
  title?: string
  type?: string
  description?: string
  urlImage?: string
  link?: string
}

const ProjectsDataFake: IProject[] = [
  {
    id: '0',
    title: 'Landing page for Amara',
    type: 'Web | UI/UX',
    description: 'project-desc-1',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604710707/StacklyCodeImages/project2_stlr9u.png',
    link: 'https://www.google.com.mx',
  },
  {
    id: '1',
    title: 'Landing page for William',
    type: 'Web | UI/UX',
    description: 'project-desc-2',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604981586/StacklyCodeImages/Project7_jyrxur.png',
    link: 'https://www.google.com.mx',
  },
  {
    id: '2',
    title: 'Landing page for Company',
    type: 'Web | UI/UX',
    description: 'project-desc-3',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604981587/StacklyCodeImages/Project6_knc2lj.png',
    link: 'https://www.google.com.mx',
  },
  {
    id: '3',
    title: 'Landing page for Amara',
    type: 'Web | UI/UX',
    description: 'project-desc-4',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604711349/StacklyCodeImages/project5_w7xkti.png',
    link: 'https://www.google.com.mx',
  },
  {
    id: '4',
    title: 'Landing page for Amara',
    type: 'Web | UI/UX',
    description: 'project-desc-5',
    urlImage:
      'https://res.cloudinary.com/stacklycode/image/upload/w_400,c_scale/v1604711350/StacklyCodeImages/project3_h3911r.png',
    link: 'https://www.google.com.mx',
  },
]

const PageHome: FC = () => {
  return (
    <TemplateMain
      SeoTitle="Stackly Code Web"
      SeoDesc="Home"
      SeoPage="In Stackly Code we understand that time is the most valuable asset and if you put it in our hands, we will make sure to bring the best product for your needs."
    >
      <OrganismHero idScroll="HeroScroll" />
      <LazyLoad once preventLoading unmountIfInvisible>
        <OrganismServices idScroll="ServicesScroll" />
      </LazyLoad>
      <LazyLoad once preventLoading unmountIfInvisible>
        <OrganismProjects idScroll="ProjectsScroll" projects={ProjectsDataFake} />
      </LazyLoad>
      <LazyLoad once preventLoading unmountIfInvisible>
        <OrganismClients idScroll="ClientsScroll" />
      </LazyLoad>
      <LazyLoad once preventLoading unmountIfInvisible>
        <OrganismContact idScroll="ContactScroll" />
      </LazyLoad>
    </TemplateMain>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
export default PageHome
