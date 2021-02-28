import React, { ReactElement } from 'react';
import TemplateMain from '@Src/components/templates';
import AtomContainer from '@Atoms/container';
import AtomTitle from '@Atoms/title';
import AtomBody from '@Atoms/body';
import styled from '@emotion/styled';
import { animated } from 'react-spring';
import I18n from '@Src/i18n';
import { TFunction } from 'next-i18next';
import { GetStaticProps } from 'next';
import ReactPlayer from 'react-player';
interface Props {
  t?: TFunction;
}

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 0px 0px;
  }
  div {
    position: relative;
  }
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 50%;
  }
  margin-bottom: 45px;
  p:first-of-type {
    margin-bottom: 5px;
  }
  h1 {
    margin-bottom: 10px;
  }
  p {
    max-width: 480px;
  }
`;

const PageLive = ({ t }: Props) => {
  return (
    <TemplateMain t={t}>
      <Hero>
        <AtomContainer>
          <TextContainer>
            <ReactPlayer
              controls={true}
              width="1280" 
              height="720"
              url={
                'http://amssamples.streaming.mediaservices.windows.net/69fbaeba-8e92-4740-aedc-ce09ae945073/AzurePromo.ism/manifest(format=mpd-time-csf)'
              }
              config={{
                file: {
                  forceDASH: true,
                },
              }}
            />
            <AtomTitle align="left" bold size="TitleMedium">
              Stackly Live
            </AtomTitle>
            <AtomBody color="accent" align="left" size="BodyLarge" bold>
              Talleres, charlas, debates y más
            </AtomBody>
          </TextContainer>
        </AtomContainer>
      </Hero>
    </TemplateMain>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['common'],
    },
  };
};
export default I18n.withTranslation(['common'])(PageLive);
