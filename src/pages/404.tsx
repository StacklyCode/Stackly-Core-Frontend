import { GetStaticProps } from 'next';

const ErrorPage = () => <h1>404 </h1>;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['common'],
    },
  };
};

export default ErrorPage;
