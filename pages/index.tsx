import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Canvas.module.css";

const Canvas: NextPage = () => {
  return (
    <div>
      <NavigationBar />
      <BottomNavigationBar />
    </div>
  );
};

export default Canvas;
