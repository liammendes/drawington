import "../styles/globals.css";
import type { AppProps } from "next/app";
import BottomNavigationBar from "../components/bottom-navigation-bar";
import NavigationBar from "../components/navigation-bar";
import classNames from "classnames";

function DrawingtonApplication({ Component, pageProps }: AppProps) {
  return (
    <div className={classNames("font-sans")}>
      <main>
        <Component />
      </main>
      <NavigationBar />
      <BottomNavigationBar />
    </div>
  );
}

export default DrawingtonApplication;
