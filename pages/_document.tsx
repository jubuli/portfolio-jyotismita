import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
