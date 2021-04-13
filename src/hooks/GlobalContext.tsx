import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@ApolloServer/config/apollo';
import ThemeContext from './ThemeContext';

const GlobalContex: FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeContext>{children}</ThemeContext>
    </ApolloProvider>
  );
};

export default GlobalContex;
