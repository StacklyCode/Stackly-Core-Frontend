import { ApolloProvider } from '@apollo/client'
import client from '@ApolloServer/config/apollo'
import { FC, ReactNode } from 'react'
import ThemeContext from './ThemeContext'

export type PROPSWITHCHILDREN = {
  children?: ReactNode
}

const GlobalContex: FC<PROPSWITHCHILDREN> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeContext>{children}</ThemeContext>
    </ApolloProvider>
  )
}

export default GlobalContex
