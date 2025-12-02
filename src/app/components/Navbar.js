"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav
      className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}
      onClick={() => setMenuOpen(false)}
    >
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
