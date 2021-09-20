import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:site_name" content="Heartbit" />
          <meta property="og:title" content="Heartbit" />
          <meta
            property="og:description"
            content="실시간 코인 트렌드 및 정보 제공 서비스"
          />
          <link rel="preload" href="/assets/images/main_bg.png" as="image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
