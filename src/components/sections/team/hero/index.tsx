import styled from '@emotion/styled'
import MoleculeTagWorkshop from '@Src/components/molecules/tagworkshop'

interface Props {

}

const FakeData = [
    {
        name: "Taller De Diseño (FrontEnd)",
        desc: "We will be in charge to bring your idea to life and give the best value for your users.We will be in charge to bring your idea to life and give the best value for your users.",
        img: "https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png",
        islive: true,
        info: {
            date: "20 June 2077",
            duration: 300,
            views: 200,
            likes: 200,
        },
        categories: [
            "Design",
            "Frontend"
        ],
        user: {
            img: "https://www.atlassian.com/es/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
            name: "Juanito Ramires",
            desc: "Fullstack Overflow",
            socialNetwork: [
                {
                    name: "facebook",
                    url: "https://www.google.com.mx/"
                },
                {
                    name: "linkedin",
                    url: "https://www.google.com.mx/"
                },
                {
                    name: "twitter",
                    url: "https://www.google.com.mx/"
                },
            ]
        }
    }
]

const SectionContainerStyled = styled.section`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
padding: 5rem 5rem;
background-color: #FAFAFA;
`

const SectionTeamHero: React.FC<Props> = () => {
    return (
        <SectionContainerStyled>
            {FakeData.map((e) => (

                <MoleculeTagWorkshop name={e.name} img={e.img} desc={e.desc} islive={e.islive} info={e.info} categories={e.categories} user={e.user} />
            ))}
        </SectionContainerStyled>
    )
}

export default SectionTeamHero
