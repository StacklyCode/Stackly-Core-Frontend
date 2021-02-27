import React, { ReactElement } from "react";
import TemplateMain from "@Src/components/templates";
import AtomContainer from "@Src/components/atoms/container";
import I18n from "@Src/i18n";
import { TFunction } from "next-i18next";
import { GetStaticProps } from "next";
import ReactPlayer from 'react-player'
interface Props {
  t?: TFunction;
}

const PageLive = ({ t }: Props) => {
  return (
    <TemplateMain t={t}>
      <AtomContainer>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </AtomContainer>
    </TemplateMain>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ["common"],
    },
  };
};
export default I18n.withTranslation(["common"])(PageLive);