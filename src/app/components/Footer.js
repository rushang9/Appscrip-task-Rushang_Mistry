"use client";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>Be The First To Know</h3>
          <p>Sign up for updates from mettā muse</p>

          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>

          <div className="gender-options">
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Other</label>
          </div>
        </div>

      
        

        <div>
          <h3>CONTACT US</h3>
          <ul className="contact-list">
            <li>📞 +91 72080 22221</li>
            <li>✉️ care@kisna.com</li>
            <li>Mumbai, India</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>FOLLOW US</h3>
          <div className="social-icons">
            <Link href="#"><i className="ri-facebook-fill"></i></Link>
            <Link href="#"><i className="ri-instagram-line"></i></Link>
            <Link href="#"><i className="ri-youtube-fill"></i></Link>
            <Link href="#"><i className="ri-twitter-x-line"></i></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Kisna. All Rights Reserved.
      </div>
    </footer>
  );
}
