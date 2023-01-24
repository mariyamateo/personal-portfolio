/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" ? "rtl" : "ltr";
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <title>Ma. Clarisse Mateo</title>
          <meta name="description" content="description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ma. Clarisse Mateo" />
          <meta
            property="og:description"
            content="Ma. Clarisse Mateo | Software Engineer"
          />
          <meta property="og:image" content="/images/contact.jpg" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/favicon.jpg"
          />
        </Head>
        <body dir={dir} lang={locale}>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
