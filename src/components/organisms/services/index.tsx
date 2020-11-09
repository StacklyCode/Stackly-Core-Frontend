import styled from '@Styles/styled';
import AtomContainer from '@Atoms/container';
import IllustrationHero from '@Assets/img/illustration-services.svg';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import MoleculesTags from '@Molecules/tags';
import AtomButton from '@Atoms/button';
import React from 'react';
import { Link } from 'react-scroll';

const Services = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const IllustrationContainer = styled.div`
  width: 30%;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
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
    width: 60%;
  }

  h1 {
    margin-bottom: 20px;
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    justify-content: space-between;
  }
  article {
    margin-top: 15px;
    ${({ theme }) => theme.mediaquery.small} {
      width: 30vw;
      div {
        div {
          p {
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    ${({ theme }) => theme.mediaquery.medium} {
      width: 23vw;
    }
    ${({ theme }) => theme.mediaquery.large} {
      width: 320px;
    }
  }
`;

type IServices = {
  idScroll?: string;
};

const OrganismServices: React.FC<IServices> = ({ idScroll }) => {
  return (
    <Services id={idScroll}>
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <IllustrationContainer>
          <IllustrationHero />
        </IllustrationContainer>
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            We’re prepare to give you the service you need.
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            No matter the project, we have the necessary tools to work in your idea from start to finish.
          </AtomBody>
          <TagsContainer>
            <MoleculesTags
              title="Designs"
              description="Marketing strategies to bring a fresh and modern identity for your brand."
              color="pink"
            />
            <MoleculesTags
              title="Apps services "
              description="Multiple services to suit your needs depending on your bussiness."
              color="green"
            />
            <MoleculesTags
              title="Web & mobile application"
              description="Well crafted applications for your idea to get a positive user feedback. "
              color="blue"
            />
            <MoleculesTags
              title="Consultancy"
              description="For new or existing project, we’ll guide you in the right direction."
              color="orange"
            />
          </TagsContainer>
          <Link to="ContactScroll" smooth offset={-40}>
            <AtomButton>Let’s start a project</AtomButton>
          </Link>
        </TextContainer>
      </AtomContainer>
    </Services>
  );
};

export default OrganismServices;
