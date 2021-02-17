import TemplateMain from "@Templates/index";
import I18n from "@Src/i18n";
import { TFunction } from "next-i18next";
import { GetStaticProps } from "next";

type TTeam = {
  t?: TFunction;
};

const PageResources = ({ t }: TTeam) => {
  return (
    <TemplateMain
      t={t}
      SeoTitle="Stackly Resources"
      SeoDesc="Resources"
      SeoPage="In Stackly Code we understand that time is the most valuable asset and if you put it in our hands, we will make sure to bring the best product for your needs."
    >
      Page To Resources
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
export default I18n.withTranslation(["common"])(PageResources);
