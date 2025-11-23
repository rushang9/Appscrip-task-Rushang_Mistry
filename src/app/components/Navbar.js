// src/components/Navbar/Navbar.jsx
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navdiv}>
    <nav className={styles.navbar}>
      

      <ul className={styles.navLinks}>
        <li><Link href="/">Shop</Link></li>
        <li><Link href="/earrings">Skills</Link></li>
        <li><Link href="/necklaces">Stories</Link></li>
        <li><Link href="/rings">About</Link></li>
        <li><Link href="/rings">Contact us</Link></li>
      </ul>
    </nav>
    </div>
  );
}
