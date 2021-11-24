import "../styles/globals.css";
import type { AppProps } from "next/app";

function DrawingtonApplication({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default DrawingtonApplication;
