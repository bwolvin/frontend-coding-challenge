"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Home from "@/components/Home";

export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p> By Xiaomin Heil</p>
        <div>
          <a
            href="https://topgolf.com/us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={require("@topgolfApp/assets/topgolf.png")}
              alt="top golf logo"
              className={styles.logo}
              priority
            />
          </a>
        </div>
      </div>
      <h1 className={styles.h1}>Please Select a Location</h1>
      <Home />
    </main>
  );
}
