import { Html, Head, Main, NextScript } from "next/document";
function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div
          id="portal"
          className="relative flex flex-col items-center justify-center"
        ></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
