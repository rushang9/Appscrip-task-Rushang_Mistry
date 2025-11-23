"use client";

export default function ProductCard({ product, addToCart, addToWishlist }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        margin: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        display : "inline-block"
      }}
    >
      <img
        src={product.image}
        alt="products"
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />

      <h3 style={{ marginTop: "10px" , width : "150px" }}>{product.title}</h3>
      <p>${product.price}</p>

      {product.price < 50 && (
        <p style={{ color: "red", fontWeight: "bold" }}>🔥 Deal!</p>
      )}

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "8px 12px",
          marginRight: "10px",
          marginTop: "10px",
          background: "#222",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>

      <button
        onClick={() => addToWishlist(product)}
        style={{
          padding: "8px 12px",
          marginTop: "10px",
          border: "1px solid #222",
          cursor: "pointer",
        }}
      >
        ❤️ Wishlist
      </button>
    </div>
  );
}
