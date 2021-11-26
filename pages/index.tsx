import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BottomNavigationBar from "../components/bottom-navigation-bar";
import Drawington from "../components/drawington";
import NavigationBar from "../components/navigation-bar";
import styles from "../styles/Canvas.module.css";

const Canvas: NextPage = () => {
  return (
    <div>
      <Drawington backgroundType="default" backgroundColor="#FFFFFF" />
    </div>
  );
};

export default Canvas;
