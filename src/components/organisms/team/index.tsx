import styled from '@Styles/styled';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import MoleculesTags from '@Molecules/tags';
import AtomButton from '@Atoms/button';

const fakeUserData = [
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  },
  {
    name: 'Albert Flores',
    description: 'Frontend Design',
    img:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    socialnetwork: [
      { name: 'facebook', url: 'fb.com/willishakkespeare' },
      { name: 'twitter', url: 'twitter.com/willishakkespeare' },
      { name: 'linkedin', url: 'linkedin.com/willishakkespeare' }
    ],
    stars: true
  }
];

const Team = styled.section`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  position: relative;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 50%;
  }

  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 10px;
  }
`;
const TagsContainer = styled.div`
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  article {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

type ITeam = {
  idScroll?: string;
};

const OrganismTeam: React.FC<ITeam> = ({ idScroll }) => {
  return (
    <Team id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TagsContainer>
          {fakeUserData.map((item) => (
            <MoleculesTags
              key={item.description}
              title={item.name}
              description={item.description}
              img={item.img}
              socialnetwork={item.socialnetwork}
              color="cyan"
            />
          ))}
        </TagsContainer>
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="white">
            Stackly Code’s Team
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            We are an experience team of amazing people wiling to bring their knowledge to your projects.
          </AtomBody>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            In Stackly Code, our team works remotely from diverse parts of the world like Peru, Mexico, Span,
            Argentina, Dominican Republic and much more. This is a great advantage to our employes, because
            they can work from anywhere and deliver qualty work without problems.
          </AtomBody>
          <AtomButton href="/#ContactScroll" color="primary">
            Let’s start a project
          </AtomButton>
        </TextContainer>
      </AtomContainer>
    </Team>
  );
};

export default OrganismTeam;
