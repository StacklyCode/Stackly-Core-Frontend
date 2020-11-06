import styled from '@Styles/styled';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import MoleculesTags from '@Molecules/tags';
import AtomButton from '@Atoms/button';

const fakeUserData = [
  {
    name: 'Albert Flores',
    description: 'Marketing strategies to bring a fresh and modern identity for your brand.',
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
    description: 'Marketing strategies to bring a fresh and modern identity for your brand.',
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
    description: 'Marketing strategies to bring a fresh and modern identity for your brand.',
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

const Clients = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/assets/img/background1.svg');
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
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  article {
    height: 0;
    margin-top: 15px;
    margin: 40px 0px;
  }
  article:nth-of-type(1) {
    align-self: flex-end;
  }
  article:nth-of-type(3) {
    align-self: flex-end;
  }
`;

const OrganismClients: React.FC = () => {
  return (
    <Clients>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            They Clients in our work.
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            We have worked with several clients around the globe. They have Clientsed in our services to bring
            their ideas to life or in an existing project to create better experiences for their users.
          </AtomBody>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            The communication is an important aspect for us. Taking us part of your journey, on building your
            project, we’ll take care of all the details for you.
          </AtomBody>
          <AtomButton>You can also trust in us</AtomButton>
        </TextContainer>
        <TagsContainer>
          <MoleculesTags
            title={fakeUserData[0].name}
            description={fakeUserData[0].description}
            img={fakeUserData[0].img}
            socialnetwork={fakeUserData[0].socialnetwork}
            stars={fakeUserData[0].stars}
            color="cyan"
          />
          <MoleculesTags
            title={fakeUserData[1].name}
            description={fakeUserData[1].description}
            img={fakeUserData[1].img}
            socialnetwork={fakeUserData[1].socialnetwork}
            stars={fakeUserData[1].stars}
            color="blue"
          />
          <MoleculesTags
            title={fakeUserData[2].name}
            description={fakeUserData[2].description}
            img={fakeUserData[2].img}
            socialnetwork={fakeUserData[2].socialnetwork}
            stars={fakeUserData[2].stars}
            color="pink"
          />
        </TagsContainer>
      </AtomContainer>
    </Clients>
  );
};

export default OrganismClients;
