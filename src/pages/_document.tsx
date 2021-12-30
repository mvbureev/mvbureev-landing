import * as React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...initialProps.styles,
        React.createElement(`style`),
      ],
    };
  }

  componentDidMount = () => {
    if (`serviceWorker` in navigator) {
      window.addEventListener(`load`, () => {
        navigator.serviceWorker.register(`/sw.js`).then(
          (registration) => {
            // eslint-disable-next-line no-console
            console.log(`Service Worker registration successful with scope: `, registration.scope);
          },
          (err) => {
            // eslint-disable-next-line no-console
            console.log(`Service Worker registration failed: `, err);
          },
        );
      });
    }
  };

  render() {
    return (
      <Html lang="en">
        <Head>
          <script key="googletagmanager" async src="https://www.googletagmanager.com/gtag/js?id=G-3ZW0090FHG" />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());
                gtag("config", "G-3ZW0090FHG");
              `,
            }}
          />
          <link rel="preload" href="/fonts/Montserrat-Regular.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Montserrat-Regular.woff" as="font" crossOrigin="" />
          <link key="apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link key="favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link key="favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link key="site.webmanifest" rel="manifest" href="/site.webmanifest" />
          <link key="safari-pinned-tab.svg" rel="mask-icon" href="/safari-pinned-tab.svg" color="#101A27" />
          <meta key="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="mvbureev" />
          <meta key="application-name" name="application-name" content="mvbureev" />
          <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#101A27" />
          <meta key="theme-color" name="theme-color" content="#101A27" />
          <meta name='freelancehunt' content='6bd9c0ce1956099' />
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
