"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import logo from "../../../assets/Logo.png";
import Image from "next/image";
import search from "../../../assets/search-normal.png";
import heart from "../../../assets/heart.png";
import profile from "../../../assets/profile.png";
import shopping from "../../../assets/shopping-bag.png";
import menuIcon from "../../../assets/hamburger.png";     // ← YOU MUST ADD THIS IMAGE
import closeIcon from "../../../assets/hamburger.png";   // ← YOU MUST ADD THIS IMAGE

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    setLanguage(prev => (prev === "EN" ? "FR" : "EN"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        
        <div className={styles.left}>
          <Image src={logo} width={35.66} height={35.66} className={styles.logoImg} alt="logo"/>
          <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <Image
              src={menuOpen ? closeIcon : menuIcon}
              width={30}
              height={30}
              alt="menu"
              className={styles.menuImg}
            />
          </div>
          <h2 className={styles.logoText}>Logo</h2>
        </div>

        <div className={styles.topright}>
          <div className={styles.desktopIcons}>
            <Image src={search} width={24} height={24} className={styles.logoImg} alt="search"/>
            <Image src={heart} width={24} height={24} className={styles.logoImg} alt="heart"/>
            <Image src={shopping} width={24} height={24} className={styles.logoImg} alt="cart"/>
            <Image src={profile} width={24} height={24} className={styles.logoImg} alt="profile"/>
            <select className={styles.filterheader}>
              <option>Eng</option>
              <option>Fr</option>
            </select>
          </div>

        </div>
      </div>

      <div className={`${styles.navdiv} ${menuOpen ? styles.showMenu : ""}`}>
        <Navbar />
      </div>

      <div className={styles.titledeals}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </div>
      </div>
    </header>
  );
}
