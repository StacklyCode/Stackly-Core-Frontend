declare module 'react-player'

declare module 'next/app' {
  export declare type AppPropsWithLayout<P = any> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P> & PropsLayout
    router: Router
    __N_SSG?: boolean | undefined
    __N_SSP?: boolean | undefined
  }
}
