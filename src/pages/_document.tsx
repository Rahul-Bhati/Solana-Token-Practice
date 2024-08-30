import Document, { DocumentContext , Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalSetup =  await super.getInitialProps(ctx);
    return initalSetup;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/favicon.icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;