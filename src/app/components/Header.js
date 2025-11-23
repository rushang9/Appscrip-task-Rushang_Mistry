"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import image from "../../../assets/Logo.png";
import Image from "next/image";


export default function Header() {
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = () => {
    setLanguage(prev => (prev === "EN" ? "FR" : "EN"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.left}>
          <Image src={image} width={35.66} height={35.66} className={styles.logoImg}/>
        </div>
        <div>
          <h2 className={styles.logoText}>Logo</h2>
        </div>

        <div className={styles.topright}>
        
          <button className={styles.iconBtn}>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          </button>

          <button className={styles.iconBtn}>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          </button>

          <button className={styles.iconBtn}>
            <link rel="icon" href="/favicon.ico" sizes="any" />
          </button>

          <button className={styles.langBtn} onClick={handleLanguageChange}>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <span>{language}</span>
          </button>
        </div>
      </div>

      <div className={styles.navdiv}>
        <Navbar />
      </div>
    </header>
  );
}
