import Seo from '@Src/components/utils/seo';
import Doc, { Html, Main, NextScript, Head, DocumentContext } from 'next/document';

class Document extends Doc {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Doc.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en-Es">
        <Head />
        <Seo title="StacklyCode" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
