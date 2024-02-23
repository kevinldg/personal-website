import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Next.js App</title>
      </Head>
      <body className="bg-dark-200 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
