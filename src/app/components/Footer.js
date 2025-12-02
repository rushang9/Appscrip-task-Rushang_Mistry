"use client";
import Link from "next/link";
import "./Footer.css";
import Image from "next/image";
import instagram from "../../../assets/Frame 28.png";
import flag from "../../../assets/us_flag.png";
import payment from "../../../assets/small_footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>Be The First To Know</h3>
          <p>Sign up for updates from mettā muse</p>
        <div className="search-menu">
          <input/>
          <button className="subscribe">Subscribe</button>
        </div>
        
        </div>  
        <div>
          <h3>CONTACT US</h3>
          <ul className="contact-list">
            <li>+44 221 133 5360</li>
            <li>customercare@mettamuse.com</li>
          </ul>
          <h3>CURRENCY</h3>
          <h4 className="flag-div">+ 
            <Image src={flag} width={24} height={24} className="flag-image"/> USD</h4> 
          <ul>
            <li>Transactions will be completed in Euros and a currency reference is available on hover.</li>
          </ul>
          <div className="social-icons">
            <Link href="#"><i className="ri-facebook-fill"></i></Link>
            <Link href="#"><i className="ri-instagram-line"></i></Link>
            <Link href="#"><i className="ri-youtube-fill"></i></Link>
            <Link href="#"><i className="ri-twitter-x-line"></i></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        
          <div>
            
          <h3>mettā muse</h3>
          <ul className="list-footer">
            <li>About us</li>
            <li>stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>Eu Compliances Docs</li>
          </ul>
          </div>
          <div>
          <h3>Quick Links</h3>
           <ul>
            <li>About us</li>
            <li>stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>Eu Compliances Docs</li>
          </ul>
          </div>
          <div className="list-footer">
            <h3>Follow Us</h3>
            <Image src={payment} width={376} height={35}/>
          </div>
        
         
      </div>
      <div className="rights-reserved">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
