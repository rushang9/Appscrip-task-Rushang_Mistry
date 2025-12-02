"use client";

import Image from "next/image";
import heart from "../../../assets/heart.png";
import styles from "./Productcard.module.css";

export default function ProductCard({ product, addToCart, addToWishlist }) {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />

      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>

      {product.price < 50 && <p className={styles.deal}>🔥 Deal!</p>}

      <div className={styles.actions}>
        <button onClick={() => addToCart(product)} className={styles.cartBtn}>
          Add to Cart
        </button>

        <Image src={heart} width={24} height={24} alt="wishlist" />
      </div>
    </div>
  );
}
