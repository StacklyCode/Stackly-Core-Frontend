import TemplateMain from '@Templates/index';
import OrganismCommunity from '@Section/web/community';
import useTranslation from 'next-translate/useTranslation';

const CommunityPage = () => {
  return (
    <>
      <TemplateMain>
        <OrganismCommunity />
      </TemplateMain>
    </>
  );
};

export const getServerSideProps = (): {} => {
  return {
    props: {},
  };
};

export default CommunityPage;
